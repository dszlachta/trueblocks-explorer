import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

import { Modal } from 'components/Modal/Modal';
//import { EditTable } from 'components';

import './NameDialog.css';

export const NameDialog = ({ showing, handler, object, columns }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  //(watch('example')); // watch input value by passing the name of it
  if (!showing) return <Fragment></Fragment>;
//  <EditTable data={object} columns={columns} handler={handler} ref={register} />
  return (
    <Modal showing={true} handler={handler} onSubmit={handleSubmit(onSubmit)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="editable_input" name="example" defaultValue={object.from} ref={register} />
        <input className="editable_input" name="exampleRequired" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </Modal>
  );
};
