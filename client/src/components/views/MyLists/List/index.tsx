import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { type List as ListType } from 'interfaces';
import ListContainer from 'components/containers/List';
import ListItem from 'components/containers/ListItem';
import Heading3 from 'components/containers/Heading3';
import styles from './List.module.css';

interface Props { lists: ListType[] }

export default function List({ lists }: Props): JSX.Element {
  return (
    <ListContainer ordered={false}>
      {lists.map((list) => (
        <Fragment key={list._id}>
          <Link
            className={styles.link}
            to={`/list/${list._id}`}
          >
            <ListItem>
              <Heading3>
                {list.name}
              </Heading3>
            </ListItem>
          </Link>
        </Fragment>
      ))}
    </ListContainer>
  );
}
