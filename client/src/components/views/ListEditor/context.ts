// libraries
import { createContext, useContext } from 'react';
// types
import { type List } from '../../../interfaces';
import { type Actions } from './state/list/types';
import { type ToggleGamePickerOpen } from './state/gamePicker/state';
import { type ToggleOptionFormOpen } from './state/optionForm/state';

interface ListEditorContext {
  list: List,
  gamePickerOpen: boolean,
  optionFormOpen: boolean,
  actions: Actions,
  toggleGamePickerOpen: ToggleGamePickerOpen,
  toggleOptionFormOpen: ToggleOptionFormOpen,
}

export const ListEditorContext = createContext<ListEditorContext | null>(null);

export function useListEditorContext(): ListEditorContext | null {
  return useContext(ListEditorContext);
}
