import React from 'react';
import Button from '../../infra/form/Button';

import { Container } from './styles';

import Disconnect from '../../../assets/icons/disconnect.png';
import Mute from '../../../assets/icons/mute.png';
import RemoveVideo from '../../../assets/icons/removeVideo.png';
import theme from '../../../styles/theme';

interface RowButtonsProps {
  functionMute: () => void;
  functionDisconnect: () => void;
  functionRemoveVideo: () => void;
}

const RowButtons: React.FC<RowButtonsProps> = ({
  functionMute,
  functionDisconnect,
  functionRemoveVideo
}) => {
  return (
    <Container>
      <Button icon color={theme.colors.green} onClick={functionMute}>
        <img src={Mute} alt="mutar" />
      </Button>
      <Button icon color={theme.colors.danger} onClick={functionDisconnect}>
        <img src={Disconnect} alt="mutar" />
      </Button>
      <Button icon color={theme.colors.green} onClick={functionRemoveVideo}>
        <img src={RemoveVideo} alt="mutar" />
      </Button>
    </Container>
  );
};

export default RowButtons;
