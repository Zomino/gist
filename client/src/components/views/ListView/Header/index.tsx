/* eslint-disable no-underscore-dangle */
import React from 'react';
import { IoPencil } from 'react-icons/io5';
import IconLink from '../../../containers/IconLink';
import Section from '../../../containers/Section';
import type List from '../../../../interfaces/List';

interface EditListButtonProps {
  id: string
}

function EditListButton({ id }: EditListButtonProps): JSX.Element {
  return (
    <IconLink to={`/listeditor/${id}`}>
      <IoPencil />
    </IconLink>
  );
}

interface HeaderProps {
  list: List
}

export default function Header({ list }: HeaderProps): JSX.Element {
  return (
    <Section>
      <h2>{list.name}</h2>
      {list._id ? <EditListButton id={list._id} /> : null}
    </Section>
  );
}
