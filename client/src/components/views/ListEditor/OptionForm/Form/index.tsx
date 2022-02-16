import {
  useState,
  useEffect,
  type FormEventHandler,
  type ChangeEventHandler,
} from 'react';
import { saveOptions } from '../../state/actions';
import { useListEditorContext } from '../../context';
import styles from './styles.module.css';

export default function Form(): JSX.Element | null {
  const [formState, setFormState] = useState({
    name: '',
    ordered: false,
  });

  const context = useListEditorContext();

  useEffect(() => {
    if (context) {
      const { list } = context;

      setFormState({
        name: list.name,
        ordered: list.ordered,
      });
    }
  }, [context]);

  if (!context) return null;

  const { dispatch, setOptionFormOpen } = context;

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    dispatch(saveOptions(formState.name, formState.ordered));

    setOptionFormOpen(false);
  };

  const onNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({
      ...formState,
      name: event.target.value,
    });
  };

  const onCheckboxChange: ChangeEventHandler<HTMLInputElement> = () => {
    setFormState({
      ...formState,
      ordered: !formState.ordered,
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={onFormSubmit}
    >
      <label
        className={styles.label}
        htmlFor="name"
      >
        List name
        <input
          className={styles.input}
          name="name"
          id="name"
          placeholder="Enter list name"
          maxLength={20}
          value={formState.name}
          onChange={onNameChange}
        />
      </label>
      <label
        className={styles.label}
        htmlFor="ordered"
      >
        Ordered
        <input
          className={styles.checkbox}
          name="ordered"
          id="ordered"
          type="checkbox"
          onChange={onCheckboxChange}
          checked={formState.ordered}
        />
      </label>
      <input
        className={styles.saveButton}
        type="submit"
        value="Save"
      />
    </form>
  );
}
