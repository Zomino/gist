import Section from 'components/containers/Section';
import Heading2 from 'components/containers/Heading2';
import EditListButton from './EditListButton';

interface HeaderProps {
  listName: string,
  listID?: string,
}

export default function Header({ listName, listID }: HeaderProps): JSX.Element {
  return (
    <Section>
      <Heading2>{listName}</Heading2>
      {listID ? <EditListButton id={listID} /> : null}
    </Section>
  );
}

Header.defaultProps = { listID: null };
