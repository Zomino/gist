// libraries
import { IoIosAddCircle } from 'react-icons/io';
// components
import Section from '../../../containers/Section/Section';
import IconLink from '../../../containers/IconLink/IconLink';

export default function Header(): JSX.Element {
  return (
    <Section>
      <h2>My Lists</h2>
      <IconLink to="/listeditor">
        <IoIosAddCircle />
      </IconLink>
    </Section>
  );
}
