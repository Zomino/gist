// libraries
import React from 'react';
// types
import { type Props } from '../../../interfaces';

interface ListProps extends Props { ordered: boolean }

export default function List({ ordered, children }: ListProps): JSX.Element {
  return (
    ordered
      ? <ol>{children}</ol>
      : <ul>{children}</ul>
  );
}
