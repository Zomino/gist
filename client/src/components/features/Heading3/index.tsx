import styles from './Heading3.module.css';

interface Heading3Props { text: string }

export default function Heading3({ text }: Heading3Props): JSX.Element {
  return <h3 className={styles.heading3}>{text}</h3>;
}
