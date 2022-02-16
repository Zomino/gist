import Section from 'components/containers/Section';
import Heading3 from 'components/containers/Heading3';
import styles from './styles.module.css';

export default function Header(): JSX.Element {
  return (
    <Section>
      <Heading3 customStyles={styles.heading}>List Options</Heading3>
    </Section>
  );
}
