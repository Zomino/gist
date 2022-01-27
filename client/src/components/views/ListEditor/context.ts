// libraries
import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from 'react';
// types
import { type List } from '../../../interfaces';
import { type Action, type Actions } from './state/types';

interface ListEditorContext {
  list: List,
  actions: Actions,
  gamePickerOpen: boolean,
  optionFormOpen: boolean,
  dispatch: (value: Action) => void,
  setGamePickerOpen: Dispatch<SetStateAction<boolean>>,
  setOptionFormOpen: Dispatch<SetStateAction<boolean>>,
}

export const ListEditorContext = createContext<ListEditorContext | null>(null);

export function useListEditorContext(): ListEditorContext | null {
  return useContext(ListEditorContext);
}
