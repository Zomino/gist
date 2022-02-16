import { type Props } from 'components/interfaces';
import { constructStoreURL } from 'services/steamFunctions';
import styles from './GameList.module.css';

interface SteamLinkProps extends Props { appid: number }

export default function SteamLink({ appid, children }: SteamLinkProps): JSX.Element {
  const url = constructStoreURL(appid);

  return (
    <a
      className={styles.steamLink}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
