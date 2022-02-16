import Section from 'components/containers/Section';
import Heading3 from 'components/containers/Heading3';
import CustomButton from 'components/features/CustomButton';
import { useListEditorContext } from '../../context';
import styles from './styles.module.css';

export default function Header(): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { setGamePickerOpen } = context;

  const closeGamePicker = (): void => {
    setGamePickerOpen(false);
  };

  return (
    <Section customStyles={styles.header}>
      <Heading3 customStyles={styles.heading}>Pick Games</Heading3>
      <CustomButton text="Done" onClick={closeGamePicker} />
    </Section>
  );
}
