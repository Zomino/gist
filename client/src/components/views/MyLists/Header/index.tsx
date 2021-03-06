import { IoIosAddCircle } from 'react-icons/io';
import Section from 'components/containers/Section';
import IconLink from 'components/containers/IconLink';
import Heading2 from 'components/containers/Heading2';

export default function Header(): JSX.Element {
  return (
    <Section>
      <Heading2>My Lists</Heading2>
      <IconLink to="/listeditor">
        <IoIosAddCircle />
      </IconLink>
    </Section>
  );
}
