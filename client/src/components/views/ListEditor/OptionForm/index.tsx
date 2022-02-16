import Modal from 'components/containers/Modal';
import Header from './Header';
import Form from './Form';
import { useListEditorContext } from '../context';

export default function OptionForm(): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { setOptionFormOpen } = context;

  const closeListOptionForm = (): void => {
    setOptionFormOpen(false);
  };

  return (
    <Modal closeModal={closeListOptionForm}>
      <Header />
      <Form />
    </Modal>
  );
}
