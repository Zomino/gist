import Modal from 'components/containers/Modal';
import Header from './Header';
import OwnedGameList from './OwnedGameList';
import { useListEditorContext } from '../context';

export default function GamePicker(): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { setGamePickerOpen } = context;

  const closeGamePicker = (): void => {
    setGamePickerOpen(false);
  };

  return (
    <Modal closeModal={closeGamePicker}>
      <Header />
      <OwnedGameList />
    </Modal>
  );
}
