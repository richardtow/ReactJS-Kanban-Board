import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { name: 'task 0', stage: 0 },
        { name: 'task 1', stage: 0 },
        { name: 'task 2', stage: 0 },
        { name: 'task 3', stage: 0 },
        { name: 'task 4', stage: 1 },
        { name: 'task 5', stage: 1 },
        { name: 'task 6', stage: 1 },
        { name: 'task 7', stage: 2 },
        { name: 'task 8', stage: 2 },
        { name: 'task 9', stage: 3 },
      ],
      selectedTaskName: 'Selected task name',
      selectedTaskStage: -1,
      moveBackEnabled: true,
      moveForwardEnabled: true
    };

    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

    this.getMoveBackDisable = (stage) => {
      if (stage > 0) {
        return false
      }
      return true
    }

    this.getMoveForwardDisable = (stage) => {
      if (stage < 3) {
        return false
      }
      return true
    }

    this.taskClickHandler = (name, stage) => {
        console.log(name + ' being clicked... from App')

      this.setState({
        selectedTaskName: name,
        selectedTaskStage: stage,
        moveBackEnabled: this.getMoveBackDisable(stage),
        moveForwardEnabled: this.getMoveForwardDisable(stage)
      })
    }  

    this.updateTasks = (step) => {
      const { tasks } = this.state;
      //console.log(tasks)

      let stage
      tasks.map((item) => {
        if (item.name === this.state.selectedTaskName) {
          if ((step > 0 && item.stage < 3) || (step < 0 && item.stage > 0)) {
            item.stage = item.stage + step
            stage = item.stage
          }
        }
      })
      //console.log(tasks)

      this.setState({
        tasks: tasks,
        moveBackEnabled: this.getMoveBackDisable(stage),
        moveForwardEnabled: this.getMoveForwardDisable(stage)
      })
    }    

    this.moveBackHandler = () => {
      this.updateTasks(-1)
    }
  
    this.moveForwardHandler = () => {
      this.updateTasks(1)
    }
  }
  
  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls 
          taskName={this.state.selectedTaskName}
          moveBackEnabled={this.state.moveBackEnabled}
          moveForwardEnabled={this.state.moveForwardEnabled}
          moveBackHandler={this.moveBackHandler}
          moveForwardHandler={this.moveForwardHandler}
        />
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          clickHandler={(name, stage) => this.taskClickHandler(name, stage)}
        />
      </div>
    );
  }
}

export default App;
