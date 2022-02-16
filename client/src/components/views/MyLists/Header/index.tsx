import { IoIosAddCircle } from 'react-icons/io';
import Section from 'components/containers/Section';
import IconLink from 'components/containers/IconLink';
import Heading2 from 'components/containers/Heading2';

export default function Header(): JSX.Element {
  const headingText = 'My Lists';
  return (
    <Section>
      <Heading2>{headingText}</Heading2>
      <IconLink to="/listeditor">
        <IoIosAddCircle />
      </IconLink>
    </Section>
  );
}
