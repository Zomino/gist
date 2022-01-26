/* eslint-disable no-underscore-dangle */

// libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import {
  IoEllipsisHorizontalCircleSharp,
  IoSave,
  IoTrashBin,
} from 'react-icons/io5';
// services
import apiService from '../../../../apiService';
import { useListEditorContext } from '../context';
// components
import Section from '../../../containers/Section/Section';
// types
import { Props } from '../../../../interfaces';
// styles
import styles from './Toolbar.module.css';

// interfaces
interface ListNameProps { name: string }

// helper functions
function ListName({ name }: ListNameProps): JSX.Element {
  return (
    <h3 className={styles.listName}>
      List Name:
      <span className={styles.listNameSpan}>
        {name || 'Unnamed List'}
      </span>
    </h3>
  );
}

function IconButtons({ children }: Props): JSX.Element {
  return <div className={styles.iconLinks}>{children}</div>;
}

function IconButton({ children }: Props): JSX.Element {
  return <div className={styles.toolButton}>{children}</div>;
}

export default function Toolbar(): JSX.Element | null {
  const navigate = useNavigate();
  const context = useListEditorContext();

  if (!context) return null;

  const {
    list,
    toggleOptionFormOpen,
    toggleGamePickerOpen,
  } = context;

  const saveList = async (): Promise<void> => {
    await apiService.putList(list);
    navigate('/');
  };

  const deleteList = async (): Promise<void> => {
    if (list._id) {
      await apiService.deleteList(list._id);
      navigate('/');
    }
  };

  const openOptions = (): void => {
    toggleOptionFormOpen();
  };

  const openGamePicker = (): void => {
    toggleGamePickerOpen();
  };

  return (
    <Section>
      <ListName name={list.name} />
      <IconButtons>
        {list._id
          ? (
            <IconButton>
              <IoTrashBin onClick={deleteList} />
            </IconButton>
          )
          : null}
        <IconButton>
          <IoSave onClick={saveList} />
        </IconButton>
        <IconButton>
          <IoEllipsisHorizontalCircleSharp onClick={openOptions} />
        </IconButton>
        <IconButton>
          <IoIosAddCircle onClick={openGamePicker} />
        </IconButton>
      </IconButtons>
    </Section>
  );
}
