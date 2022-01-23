import React, { Fragment } from 'react';
import APIService from '../../../../services/APIService';
import ListContainer from '../../../containers/List';
import ListItem from '../../../containers/ListItem';
import GameImage from '../../../features/GameImage';
import styles from './GameList.module.css';
import type List from '../../../../interfaces/List';
import type Game from '../../../../interfaces/Game';
import type Props from '../../../../interfaces/Props';

interface SteamLinkProps extends Props {
  appid: number
}

function SteamLink({ appid, children }: SteamLinkProps): JSX.Element {
  const url = APIService.constructStoreURL(appid);
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

interface GameRankProps {
  index: number
}

function GameRank({ index }: GameRankProps): JSX.Element {
  return (
    <span className={styles.gameRank}>
      {`#${index + 1}`}
    </span>
  );
}

interface GameListProps {
  list: List
}

export default function GameList({ list }: GameListProps): JSX.Element {
  return (
    <ListContainer ordered={!!list.ordered}>
      {list.games.map((game: Game, index) => (
        <Fragment key={game.appid}>
          <SteamLink appid={game.appid}>
            <ListItem>
              <div className={styles.flexContainer}>
                <GameImage
                  appid={game.appid}
                  hash={game.img_logo_url}
                />
                <h3>
                  {list.ordered ? <GameRank index={index} /> : null}
                  {game.name}
                </h3>
              </div>
            </ListItem>
          </SteamLink>
        </Fragment>
      ))}
    </ListContainer>
  );
}
