/* eslint-disable no-underscore-dangle */

// libraries
import React from 'react';
import { IoPencil } from 'react-icons/io5';
// components
import IconLink from '../../../containers/IconLink/IconLink';
import Section from '../../../containers/Section/Section';
// types
import { type List } from '../../../../interfaces';

interface HeaderProps { list: List }
interface EditListButtonProps { id: string }

function EditListButton({ id }: EditListButtonProps): JSX.Element {
  return (
    <IconLink to={`/listeditor/${id}`}>
      <IoPencil />
    </IconLink>
  );
}

export default function Header({ list }: HeaderProps): JSX.Element {
  return (
    <Section>
      <h2>{list.name}</h2>
      {list._id ? <EditListButton id={list._id} /> : null}
    </Section>
  );
}
