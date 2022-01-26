// libraries
import React, { Fragment } from 'react';
// services
import apiService from '../../../../apiService';
// components
import ListContainer from '../../../containers/List/List';
import ListItemContainer from '../../../containers/ListItem/ListItem';
import GameImage from '../../../features/GameImage/GameImage';
// types
import type { List, Game, Props } from '../../../../interfaces';
// styles
import styles from './GameList.module.css';

// interfaces
interface GameListProps { list: List }
interface ListItemProps {
  game: Game,
  index: number,
  list: List,
}
interface SteamLinkProps extends Props { appid: number }
interface GameRankProps { index: number }

// helper functions
function GameRank({ index }: GameRankProps): JSX.Element {
  return (
    <span className={styles.gameRank}>
      {`#${index + 1}`}
    </span>
  );
}

function GameInfo({ game, index, list }: ListItemProps): JSX.Element {
  return (
    <h3>
      {list.ordered ? <GameRank index={index} /> : null}
      {game.name}
    </h3>
  );
}

function SteamLink({ appid, children }: SteamLinkProps): JSX.Element {
  const url = apiService.constructStoreURL(appid);

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

function ListItem({ game, index, list }: ListItemProps): JSX.Element {
  return (
    <SteamLink appid={game.appid}>
      <ListItemContainer>
        <div className={styles.flexContainer}>
          <GameImage appid={game.appid} hash={game.img_logo_url} />
          <GameInfo list={list} game={game} index={index} />
        </div>
      </ListItemContainer>
    </SteamLink>
  );
}

// exported component
export default function GameList({ list }: GameListProps): JSX.Element {
  return (
    <ListContainer ordered={!!list.ordered}>
      {list.games.map((game: Game, index) => (
        <Fragment key={game.appid}>
          <ListItem game={game} index={index} list={list} />
        </Fragment>
      ))}
    </ListContainer>
  );
}
