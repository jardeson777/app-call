/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-restricted-syntax */
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Peer, { Instance } from 'simple-peer';
import styled from 'styled-components';
import Header from '../../components/ui/Header';
import RowButtons from '../../components/ui/RowButtons';
import theme from '../../styles/theme';

import { Container, Content, RowVideo } from './styles';
import Avatar from '../../assets/avatar.png';

interface VideoProps {
  peer: Peer.Instance;
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOn, setVideoOn] = useState(false);

  const [peers, setPeers] = useState<Instance[]>([]);
  const socketRef = useRef();
  const userVideo = useRef<HTMLVideoElement>(null);
  // const peersRef = useRef<Any>([]);
  const peersArray: { peerID: any; peer: Peer.Instance }[] = [];
  const roomID = '0001';

  const roomName = 'sala';

  // const PermissionStream = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true, audio: false })
  //     .then(function (stream) {
  //       console.log(stream);
  //       setVideoOn(true);

  //       if (videoRef.current !== null) {
  //         videoRef.current.srcObject = stream;

  //         videoRef.current.onloadedmetadata = () => {
  //           videoRef.current?.play();
  //         };
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log({ error });
  //     });
  // };

  // const stream = PermissionStream();

  const socket = io('http://localhost:8000', {
    query: {
      room: roomName
    }
  });

  function createPeer(
    userToSignal: any,
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
    incomingSignal: string | Peer.SignalData,
    callerID: any,
    stream: any
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
  // if (videoRef.current !== null) {
  //   videoRef.current.srcObject = stream;
  //   videoRef.current.onloadedmetadata = () => {
  //     videoRef.current?.play();
  //   };
  // }

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(stream => {
        setVideoOn(true);

        if (videoRef.current && socket) {
          videoRef.current.srcObject = stream;

          socket.emit('join room', roomID);

          socket.on('all users', users => {
            const peers: Peer.Instance[] = [];

            users.forEach((userID: any) => {
              const peer = createPeer(userID, socket.id, stream);

              peersArray.push({
                peerID: userID,
                peer
              });
              peers.push(peer);
            });

            setPeers(peers);
          });
        }

        socket.on('user joined', payload => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersArray.push({
            peerID: payload.callerID,
            peer
          });

          setPeers(users => [...users, peer]);
        });

        socket.on('receiving returned signal', payload => {
          const item = peersArray.find(p => p.peerID === payload.id);
          if (item != null) {
            item.peer.signal(payload.signal);
          }
        });
      })
      .catch(error => {
        console.error({ error });
      });
  }, [peersArray, socket]);

  const openMensagens = () => {
    //
  };

  const functionMute = () => {
    //
  };

  const functionDisconnect = () => {
    //
  };

  const functionRemoveVideo = () => {
    setVideoOn(false);
  };

  const openVideo = () => {
    //
  };

  return (
    <Container>
      <Content>
        <Header
          clickButton={openVideo}
          colorButton={theme.colors.green}
          textButton="Mensagens"
          textHeader="Código da sala: "
          textHeaderDestaque="00001"
        />
        <RowVideo>
          <div>
            {/* {videoOn && (
              <video ref={videoRef}>
                <track kind="captions" srcLang="en" />
                <track kind="captions" srcLang="es" />
              </video>
            )}

            {!videoOn && (
              <div className="videoOff">
                <img src={Avatar} alt="" />
              </div>
            )} */}
            <StyledVideo muted ref={userVideo} autoPlay playsInline>
              <track kind="captions" srcLang="en" />
              <track kind="captions" srcLang="es" />
            </StyledVideo>
            {peers.map((peer, index) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Video key={index} peer={peer} />;
            })}
          </div>
          {/* <div>
            {!videoOn && (
              <video muted>
                <track kind="captions" srcLang="en" />
                <track kind="captions" srcLang="es" />
                <track kind="captions" srcLang="pt-br" />
              </video>
            )}
            {videoOn && (
              <div className="videoOff">
                <img src={Avatar} alt="" />
              </div>
            )}
          </div> */}
        </RowVideo>
        <RowButtons
          functionMute={functionMute}
          functionDisconnect={functionDisconnect}
          functionRemoveVideo={functionRemoveVideo}
        />
      </Content>
    </Container>
  );
};

export { Meet };
