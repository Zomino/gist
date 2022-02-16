import { type Game } from 'interfaces';
import { type Props } from 'components/interfaces';
import actions from '../../state/actions';
import { useListEditorContext } from '../../context';
import styles from './styles.module.css';

interface ClickableWrapperProps extends Props {
  game: Game,
  added: boolean,
}

export default function ClickableWrapper({ game, added, children }: ClickableWrapperProps): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { dispatch } = context;

  const addGame = (): void => {
    dispatch(actions.addGame(game));
  };

  if (added) {
    return (
      <div className={styles.notAllowed}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={styles.allowed}
      onClick={addGame}
      onKeyDown={addGame}
    >
      {children}
    </div>
  );
}
