import { type Props } from 'components/interfaces';
import defaultStyles from './styles.module.css';

interface Heading3Props extends Props { customStyles?: string }

export default function Heading3({ customStyles, children }: Heading3Props): JSX.Element {
  const styles = customStyles
    ? `${defaultStyles.heading3} ${customStyles}`
    : `${defaultStyles.heading3}`;

  return <h3 className={styles}>{children}</h3>;
}

Heading3.defaultProps = { customStyles: null };
