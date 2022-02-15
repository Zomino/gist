import { type Props } from 'components/interfaces';
import defaultStyles from './ListItem.module.css';

interface ListItemProps extends Props { customStyles?: string }

export default function ListItem({ customStyles, children }: ListItemProps): JSX.Element {
  const styles = customStyles
    ? `${defaultStyles.listItem} ${customStyles}`
    : `${defaultStyles.listItem}`;

  return (
    <li className={styles}>
      {children}
    </li>
  );
}

ListItem.defaultProps = { customStyles: null };
