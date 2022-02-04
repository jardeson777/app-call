/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Peer, { Instance, SignalData } from 'simple-peer';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import theme from '../../styles/theme';

import { Container, Content, RowVideo } from './styles';
import { useDataMeet } from '../../hook/useDataMeet';
import RowButtons from '../../components/ui/RowButtons';

interface VideoProps {
  peer: Peer.Instance;
}

interface PeersRefProps {
  user: Instance;
  peer: Instance;
}

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
`;

const Video: React.FC<VideoProps> = ({ peer }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    peer.on('stream', stream => {
      if (ref.current != null) {
        ref.current.srcObject = stream;
      }
    });
  }, [peer]);

  return (
    <StyledVideo playsInline autoPlay ref={ref}>
      <track kind="captions" srcLang="en" />
      <track kind="captions" srcLang="es" />
    </StyledVideo>
  );
};

const Meet: React.FC = () => {
  const { nameRoom } = useDataMeet();
  const navigate = useNavigate();

  if (!nameRoom) {
    navigate('/');
  }

  const back = () => {
    navigate('/');
  };

  const myVideoRef = useRef<HTMLVideoElement>(null);
  const [peers, setPeers] = useState<Instance[]>([]);

  const peersRef = useRef<PeersRefProps[]>([]);

  let socket: Socket;

  function createPeer(
    userToSignal: Instance,
    callerID: string,
    stream: MediaStream
  ) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream
    });

    peer.on('signal', signal => {
      socket.emit('sending signal', {
        userToSignal,
        callerID,
        signal
      });
    });

    return peer;
  }

  function addPeer(
    incomingSignal: string | SignalData,
    callerID: string,
    stream: MediaStream
  ) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream
    });

    peer.on('signal', signal => {
      socket.emit('returning signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  useEffect(() => {
    socket = io('https://app-call-serve.herokuapp.com/');

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (myVideoRef.current) {
          myVideoRef.current.srcObject = stream;
        }
        socket.emit('join room', nameRoom);

        socket.on('all users', (users: Instance[]) => {
          const peers: Peer.Instance[] = [];

          users.forEach((user: Instance) => {
            const peer = createPeer(user, socket.id, stream);

            peersRef.current.push({
              user,
              peer
            });

            peers.push(peer);
          });

          setPeers(peers);
        });

        socket.on('user joined', payload => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            user: payload.callerID,
            peer
          });

          setPeers(users => [...users, peer]);
        });

        socket.on('receiving returned signal', payload => {
          const item = peersRef.current.find(
            (p: PeersRefProps) => p.user === payload.id
          );
          if (item) {
            item.peer.signal(payload.signal);
          }
        });
      })

      .catch(error => {
        console.error({ error });
      });
  }, []);

  return (
    <Container>
      <Content>
        <Header
          clickButton={() => {
            ('');
          }}
          colorButton={theme.colors.green}
          textButton="Mensagens"
          textHeader="Código da sala: "
          textHeaderDestaque={nameRoom}
          functionHome={back}
        />
        <RowVideo>
          <StyledVideo muted ref={myVideoRef} autoPlay playsInline>
            <track kind="captions" srcLang="en" />
            <track kind="captions" srcLang="es" />
          </StyledVideo>
          {peers.map(peer => {
            if (peer.readable) {
              return <Video key={uuidv4()} peer={peer} />;
            }
            return '';
          })}
        </RowVideo>
      </Content>
    </Container>
  );
};

export { Meet };
