import React, { useState, useEffect } from 'react';
import Panel, { useExpanded } from '../Panels/Panel';

//----------------------------------------------------------------------
const Status = () => {
  let [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/blocks?blocks=12")
      .then(response => {
        console.log('here');
        return response.json();
      })
      .then(json => setUsers(json))
  }, []);

  const content = useExpanded('status') ? JSON.stringify(users) : '';
  return (
    <Panel title="Status" type="status">
      {content}
    </Panel>
  );
};

export default Status;
