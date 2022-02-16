import Heading3 from 'components/containers/Heading3';
import styles from './styles.module.css';
import { useListEditorContext } from '../context';

export default function ListName(): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { list } = context;

  return (
    <Heading3 customStyles={styles.listName}>
      List Name:
      <span className={styles.listNameSpan}>
        {list.name || 'Unnamed List'}
      </span>
    </Heading3>
  );
}
