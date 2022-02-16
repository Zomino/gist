import styles from './styles.module.css';

interface ErrorMessageProps { customMessage: string }

export default function ErrorMessage({ customMessage }: ErrorMessageProps): JSX.Element {
  const message = `Error: ${customMessage}`;

  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
