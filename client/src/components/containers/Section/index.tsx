import { type Props } from 'components/interfaces';
import defaultStyles from './styles.module.css';

interface SectionProps extends Props { customStyles?: string }

export default function Section({ customStyles, children }: SectionProps): JSX.Element {
  const styles = customStyles
    ? `${defaultStyles.section} ${customStyles}`
    : `${defaultStyles.section}`;

  return (
    <div className={styles}>
      {children}
    </div>
  );
}

Section.defaultProps = { customStyles: null };
