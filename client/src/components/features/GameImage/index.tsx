import React from 'react';
import APIService from '../../../services/APIService';
import styles from './GameImage.module.css';

interface GameImageProps {
  appid: number,
  hash: string
}

export default
function GameImage({ appid, hash }: GameImageProps): JSX.Element {
  const url = APIService.constructImageURL(appid, hash);

  return (
    <div
      className={styles.gameImage}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}
