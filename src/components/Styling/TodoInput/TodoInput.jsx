import React from 'react';
import propTypes from 'prop-types';
import './todoinput.css';

class TodoInput extends React.Component {
  render() {
    return (
      <div className='Input-container'>
        <input
          className='Input-bar'
          placeholder='Simply add a task and click enter'
          onKeyPress={e => this.props.createTodo(e)}
        />
      </div>
    );
  }
}

TodoInput.propTypes = {
  createTodo: propTypes.func.isRequired
};

export default TodoInput;
