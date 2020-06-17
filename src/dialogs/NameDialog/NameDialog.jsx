import React, { Fragment } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';

import { Modal } from 'components/Modal/Modal';
//import { EditTable } from 'components';
import { NameDialogFormRow } from './NameDialogFormRow';

import './NameDialog.css';
import { handleClick } from 'components/utils';
import { typeToConstraints } from 'modules/string_validation';

function columnsToInputs({ columns, defaultValues, register, errors }) {
  return columns
    .filter(({ hidden }) => !hidden)
    .map((column) => {
      const { selector, name } = column;

      if (selector === 'id') return null;

      const constraints = typeToConstraints.get(selector) || {};

      return (
        <NameDialogFormRow
          key={selector}
          name={name}
          selector={selector}>
            <input
            name={selector}
            defaultValue={defaultValues[selector]}
            className="editable_input"
            ref={register({ ...constraints })} />
            <ErrorMessage errors={errors} name={selector} />
        </NameDialogFormRow>
      )
    });
}

export const NameDialog = ({ showing, handler, object, columns }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  if (!showing) return <Fragment></Fragment>;

  // Prepare click listeners
  // Here we "save" actionType for later use and return a new function that will take event as
  // a parameter and call `handleClick`
  const handleButtonClick = (actionType) => (e) => handleClick(e, handler, { type: actionType });
  // This one will call two functions. We don't need to return a new function and remember actionType,
  // because it will be used with submit button only - so we can just set `actionType` to `okay`.
  const handleSubmitClick = (e) => {
    e.persist();

    handleSubmit((data) => {
      onSubmit({
        ...data,
        id: data.address,
        is_custom: object.is_custom
      });
      handleButtonClick('okay')(e);
    })();
  };

  // Buttons that we will use instead of the default ones
  const buttons = (
    <Fragment>
      <button
        type="reset"
        onClick={handleButtonClick('cancel')}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="selected"
        onClick={handleSubmitClick}
      >
        Okay
      </button>
    </Fragment>
  );

  return (
    <Modal showing={true} handler={handler} buttons={buttons} header="Add/Edit Named Address">
      <form onSubmit={handleSubmit(onSubmit)}>
        {columnsToInputs({ columns, defaultValues: object, register, errors })}
      </form>
    </Modal>
  );
};
