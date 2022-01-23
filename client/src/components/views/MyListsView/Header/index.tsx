import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import Section from '../../../containers/Section';
import IconLink from '../../../containers/IconLink';

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
