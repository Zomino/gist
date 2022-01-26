/* eslint-disable no-underscore-dangle */

// libraries
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// components
import ListContainer from '../../../containers/List/List';
import ListItem from '../../../containers/ListItem/ListItem';
// types
import { type List } from '../../../../interfaces';
// styles
import styles from './ListList.module.css';

interface Props { lists: List[] }

export default function ListList({ lists }: Props): JSX.Element {
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
