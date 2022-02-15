import { type Props } from 'components/interfaces';

interface ListProps extends Props { ordered: boolean }

export default function List({ ordered, children }: ListProps): JSX.Element {
  return (
    ordered
      ? <ol>{children}</ol>
      : <ul>{children}</ul>
  );
}
