// services
import { useListEditorContext } from '../../context';
// styles
import styles from './Header.module.css';

export default function Header(): JSX.Element | null {
  const context = useListEditorContext();

  if (!context) return null;

  const { setGamePickerOpen } = context;

  const closeGamePicker = (): void => {
    setGamePickerOpen(false);
  };

  return (
    <div className={styles.header}>
      <h3 className={styles.heading}>Pick Games</h3>
      <button
        type="button"
        className={styles.doneButton}
        onClick={closeGamePicker}
      >
        Done
      </button>
    </div>
  );
}
