import React from 'react';
import propTypes from 'prop-types';
import './todoitem.css';

class TodoItem extends React.Component {
  render() {
    console.log(this.props.id);
    return (
      <div className='TodoItem'>
        {this.props.title}
        <span
          className='removeOp'
          onClick={() => this.props.remove(this.props.id)}
        >
          click to remove
        </span>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired
};

export default TodoItem;
