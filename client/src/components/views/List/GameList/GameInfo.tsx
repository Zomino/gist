import Heading3 from 'components/containers/Heading3';
import GameRank from './GameRank';

interface GameInfoProps {
  ordered: boolean,
  gameName: string,
  index: number,
}

export default function GameInfo({ ordered, gameName, index }: GameInfoProps): JSX.Element {
  return (
    <Heading3>
      {ordered ? <GameRank index={index} /> : null}
      {gameName}
    </Heading3>
  );
}
