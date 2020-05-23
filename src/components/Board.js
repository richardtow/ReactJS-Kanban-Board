import React from 'react';

import Stage from './Stage';

const Board = ({ stagesNames, stagesTasks, clickHandler }) => {
  return (
    <div>
      <h1>Kanban Board</h1>
      <div style={{
        display: 'flex',
      }}>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
            tasks={tasks}
            taskClickHandler={(name, stage) => clickHandler(name, stage)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
