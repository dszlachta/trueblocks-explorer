import React from 'react';

const debug = true;
export const Debug = ({ text, func }) => {
  if (!debug)
    return <></>
  return (
    <>
      <br />
      <div onClick={func}>
        {text}
      </div>
    </>
  );
}
