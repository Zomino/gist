import { type Props } from 'components/interfaces';
import defaultStyles from './styles.module.css';

interface Heading4Props extends Props { customStyles?: string }

export default function Heading4({ customStyles, children }: Heading4Props): JSX.Element {
  const styles = customStyles
    ? `${defaultStyles.heading4} ${customStyles}`
    : `${defaultStyles.heading4}`;

  return <h4 className={styles}>{children}</h4>;
}

Heading4.defaultProps = { customStyles: null };
