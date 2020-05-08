import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'components/Modal/Modal';
import './NameDialog.css';

export const NameDialog = ({ showing, handler, object }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch('example')); // watch input value by passing the name of it

  if (!showing) return <Fragment></Fragment>;
  return (
    <Modal showing={true} handler={handler} onSubmit={handleSubmit(onSubmit)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="editable_input" name="example" defaultValue="test" ref={register} />
        <input name="exampleRequired" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </Modal>
  );
};

/*
import React from 'react';

import { Modal, ObjectTable } from 'components';

export const AddName = ({ showing, handler, object }) => {
  return (
    <Modal showing={showing} handler={handler}>
      {/* prettier-ignore * /}
      <ObjectTable
            data={{...object, tags: 'MyTags'}}
            columns={editNameSchema}
            title="Add Name"
            showHidden={false}
          />
    </Modal>
  );
};

export const EditName = ({ showing, handler, object }) => {
  return (
    <Modal showing={showing} handler={handler}>
      {/* prettier-ignore * /}
      <ObjectTable
            data={object}
            columns={editNameSchema}
            title="Edit Name"
            editable={true}
            showHidden={false}
          />
    </Modal>
  );
};

//----------------------------------------------------------------------------
// auto-generate: schema
const editNameSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Tags',
    selector: 'tags',
    type: 'string',
    width: 3,
    editable: true,
    searchable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    width: 6,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 4,
    editable: true,
    searchable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    width: 2,
    editable: true,
    align: 'center',
    searchable: true,
  },
  {
    name: 'Source',
    selector: 'source',
    type: 'string',
    hidden: true,
    width: 4,
    editable: true,
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    width: 2,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    width: 4,
    editable: true,
    searchable: true,
  },
];
// auto-generate: schema

*/

/*
export const Editable = (props) => {
  const [isActive, setActive] = useState(props.isActive);
  const [inputValue, setInput] = useState(props.fieldValue);
  const [errorStr, setError] = useState('');

  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  const enter = useKeypress('Enter');
  const esc = useKeypress('Escape');

  const validateInput = useCallback(() => {
    if (!props.onValidate) return true;
    const res = props.onValidate(props.fieldName, cleanHTML(inputValue));
    if (res === '') return true;
    setError(res);
    return false;
  }, [inputValue, props]);

  const closeEditor = useCallback(() => {
    if (isActive) {
      setActive(false);
      if (validateInput() && props.onAccept) props.onAccept(props.record_id, props.fieldName, cleanHTML(inputValue));
    }
  }, [isActive, inputValue, props, validateInput]);

  useEffect(() => {
    if (isActive) {
      inputRef.current.focus();
      setError('');
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      if (enter) {
        closeEditor();
      } else if (esc) {
        setActive(false);
        setInput(props.fieldValue);
      }
    }
  }, [enter, esc, closeEditor, isActive, props.fieldValue]); // watch the Enter and Escape key presses

  let visibleText = errorStr;
  if (visibleText === '') visibleText = props.fieldValue;
  if (visibleText === '') visibleText = inputValue;
  if (visibleText === '') visibleText = props.placeholder !== '' ? '<' + props.placeholder + '>' : '';
  if (visibleText === '') visibleText = '<' + props.fieldName + '>';

  let textCn = props.className + ' editable_text ' + (!isActive ? '' : 'hidden');
  if (errorStr !== '') textCn = props.className + ' warning';
  const inputCn = props.className + ' editable_input ' + (isActive ? '' : 'hidden');

  if (!props.editable) return <Fragment>{props.fieldValue}</Fragment>;
  return (
    <div ref={wrapperRef}>
      <div ref={textRef} onClick={() => setActive(true)} className={textCn}>
        {visibleText}
      </div>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          setInput(e.target.value);
          if (props.onChange) props.onChange(props.record_id, props.fieldName, cleanHTML(e.target.value));
        }}
        onBlur={(e) => {
          closeEditor();
        }}
        placeholder={props.placeholder}
        className={inputCn}
      />
    </div>
  );
};

//------------------------------------------------------------------
function cleanHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
*/
