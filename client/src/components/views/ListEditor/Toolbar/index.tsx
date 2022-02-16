import { useNavigate } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import {
  IoEllipsisHorizontalCircleSharp,
  IoSave,
  IoTrashBin,
} from 'react-icons/io5';
import serverAPI from 'services/serverAPI';
import { useAppDispatch } from 'state/hooks';
import { fetchLists } from 'state/slices/lists';
import Section from 'components/containers/Section';
import ListName from './ListName';
import IconButtons from './IconButtons';
import IconButton from './IconButton';
import { useListEditorContext } from '../context';

export default function Toolbar(): JSX.Element | null {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const context = useListEditorContext();
  if (!context) return null;
  const {
    list,
    setOptionFormOpen,
    setGamePickerOpen,
  } = context;

  const saveList = async (): Promise<void> => {
    await serverAPI.putList(list);
    dispatch(fetchLists());
    navigate('/');
  };

  const deleteList = async (): Promise<void> => {
    if (list._id) {
      await serverAPI.deleteList(list._id);
      dispatch(fetchLists());
      navigate('/');
    }
  };

  const openOptions = (): void => {
    setOptionFormOpen(true);
  };

  const openGamePicker = (): void => {
    setGamePickerOpen(true);
  };

  return (
    <Section>
      <ListName />
      <IconButtons>
        {list._id ? <IconButton><IoTrashBin onClick={deleteList} /></IconButton> : null}
        <IconButton><IoSave onClick={saveList} /></IconButton>
        <IconButton><IoEllipsisHorizontalCircleSharp onClick={openOptions} /></IconButton>
        <IconButton><IoIosAddCircle onClick={openGamePicker} /></IconButton>
      </IconButtons>
    </Section>
  );
}
