// services
import { useListEditorContext } from '../context';
// components
import Modal from '../../../containers/Modal/Modal';
import Header from './Header/Header';
import OwnedGameList from './OwnedGameList/OwnedGameList';

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
