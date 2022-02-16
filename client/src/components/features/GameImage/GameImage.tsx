import { constructImageURL } from 'services/steamFunctions';
import styles from './GameImage.module.css';

interface GameImageProps {
  appid: number,
  hash: string,
}

export default function GameImage({ appid, hash }: GameImageProps): JSX.Element {
  const url = constructImageURL(appid, hash);

  return (
    <div
      className={styles.gameImage}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}
