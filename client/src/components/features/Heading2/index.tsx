import styles from './Heading2.module.css';

interface Heading2Props { text: string }

export default function Heading2({ text }: Heading2Props): JSX.Element {
  return <h2 className={styles.heading2}>{text}</h2>;
}
