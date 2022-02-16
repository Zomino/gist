import Heading3 from 'components/containers/Heading3';
import { useListEditorContext } from '../context';
import styles from './styles.module.css';

interface GameNameProps {
  name: string,
  index: number,
}

export default function GameName({ name, index }: GameNameProps): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { list } = context;

  return (
    <Heading3 customStyles={styles.gameName}>
      {list.ordered
        ? <span className={styles.gameRank}>{`#${index + 1}`}</span>
        : null}
      {name}
    </Heading3>
  );
}
