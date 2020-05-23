import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value={this.props.taskName}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={this.props.moveBackEnabled}
            data-testid="move-back-btn"
            onClick={this.props.moveBackHandler}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={this.props.moveForwardEnabled}
            data-testid="move-forward-btn"
            onClick={this.props.moveForwardHandler}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
