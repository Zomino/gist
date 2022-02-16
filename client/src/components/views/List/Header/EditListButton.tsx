import { IoPencil } from 'react-icons/io5';
import IconLink from 'components/containers/IconLink';

interface EditListButtonProps { id: string }

export default function EditListButton({ id }: EditListButtonProps): JSX.Element {
  return (
    <IconLink to={`/listeditor/${id}`}>
      <IoPencil />
    </IconLink>
  );
}
