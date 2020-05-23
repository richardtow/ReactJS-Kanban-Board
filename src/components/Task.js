import React from 'react';
//import { instanceOf } from 'prop-types';

const taskNameToId = name => {
  return `task-${name}`;
}

const Task = ({ name, stage, clickCallback }) => {
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        margin: '1rem 1rem 0 1rem' }}
      data-testid={taskNameToId(name)}
      onClick={ () => clickCallback(name, stage) }
    >
      {name}
    </div>
  );
}

export default Task;
