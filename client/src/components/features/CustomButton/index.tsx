import styles from './styles.module.css';

interface CustomButtonProps {
  text: string,
  onClick: () => void,
}

export default function CustomButton({ text, onClick }: CustomButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={styles.customButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
