// services
import apiService from '../../../apiService';
// styles
import styles from './GameImage.module.css';

interface GameImageProps {
  appid: number,
  hash: string
}

export default
function GameImage({ appid, hash }: GameImageProps): JSX.Element {
  const url = apiService.constructImageURL(appid, hash);

  return (
    <div
      className={styles.gameImage}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}
