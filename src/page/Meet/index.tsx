import React, { useRef, useState } from 'react';
import Header from '../../components/ui/Header';
import RowButtons from '../../components/ui/RowButtons';
import theme from '../../styles/theme';

import { Container, Content, RowVideo } from './styles';
import Avatar from '../../assets/avatar.png';

const Meet: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOn, setVideoOn] = useState(false);

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
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(function (stream) {
        console.log(stream);
        setVideoOn(true);

        if (videoRef.current !== null) {
          videoRef.current.srcObject = stream;

          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
          };
        }
      })
      .catch(function (error) {
        console.log({ error });
      });
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
            {videoOn && (
              <video ref={videoRef}>
                <track kind="captions" srcLang="en" />
                <track kind="captions" srcLang="es" />
              </video>
            )}

            {!videoOn && (
              <div className="videoOff">
                <img src={Avatar} alt="" />
              </div>
            )}
          </div>
          <div>
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
          </div>
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
