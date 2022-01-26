/* eslint-disable no-underscore-dangle */

// libraries
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
// services
import APIService from '../../../apiService';
import useListReducer from './state/list/state';
import useGamePickerState from './state/gamePicker/state';
import useOptionFormState from './state/optionForm/state';
import { ListEditorContext as Context } from './context';
// components
import View from '../../containers/View/View';
import Spinner from '../../features/Spinner/Spinner';
import Header from './Header';
import Toolbar from './Toolbar';

export default function ListEditor(): JSX.Element {
  const [list, actions] = useListReducer();
  const [gamePickerOpen, toggleGamePickerOpen] = useGamePickerState();
  const [optionFormOpen, toggleOptionFormOpen] = useOptionFormState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      (async () => {
        const fetchedList = await APIService.getListById(id);
        actions.setList(fetchedList);
      })();
    }
  }, [id, actions]);

  const value = useMemo(() => ({
    list,
    gamePickerOpen,
    optionFormOpen,
    actions,
    toggleGamePickerOpen,
    toggleOptionFormOpen,
  }), [
    list,
    gamePickerOpen,
    optionFormOpen,
    actions,
    toggleGamePickerOpen,
    toggleOptionFormOpen,
  ]);

  if (id && !list._id) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  return (
    <Context.Provider value={value}>
      <View>
        <Header />
        <Toolbar />
      </View>
    </Context.Provider>
  );
}
