/* eslint-disable no-underscore-dangle */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ListContainer from '../../../containers/List';
import ListItem from '../../../containers/ListItem';
import styles from './MyLists.module.css';
import type List from '../../../../interfaces/List';

interface Props {
  lists: List[]
}

export default function MyLists({ lists }: Props): JSX.Element {
  return (
    <ListContainer ordered={false}>
      {lists.map((list) => (
        <Fragment key={list._id}>
          <Link
            className={styles.link}
            to={`/list/${list._id}`}
          >
            <ListItem>
              <h3>{list.name}</h3>
            </ListItem>
          </Link>
        </Fragment>
      ))}
    </ListContainer>
  );
}
