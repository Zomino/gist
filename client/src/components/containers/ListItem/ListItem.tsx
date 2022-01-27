// types
import { type Props } from '../../../interfaces';
// styles
import styles from './ListItem.module.css';

interface ListItemProps extends Props { customStyles?: string }

export default
function ListItem({ customStyles, children }: ListItemProps): JSX.Element {
  const className = customStyles
    ? `${styles.listItem} ${customStyles}`
    : `${styles.listItem}`;

  return (
    <li className={className}>
      {children}
    </li>
  );
}

ListItem.defaultProps = { customStyles: null };
