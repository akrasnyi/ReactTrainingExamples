import React from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem';

interface IInlineState {
  todos: any;
  error: string;
}

const TodoComponent = {
  width: '600px',
  margin: '0 auto',
  backgroundColor: '#1b5447',
  minHeight: '200px'
};

const Header = {
  padding: '10px 20px',
  color: 'white',
  textAling: 'center'
};

const ErrorMessage = {
  color: 'red',
  fontSize: '20px'
};

class StylingObject extends React.PureComponent<any, IInlineState> {
  constructor(props: any) {
    super(props);

    this.state = {
      todos: [],
      error: 'Scary error message!'
    };
  }

  createTodo = (e: any) => {
    if (e.charCode == '13') {
      // do justice here

      let todos = this.state.todos;
      let length = todos.length;

      this.setState({
        todos: [...this.state.todos, { id: length + 1, title: e.target.value }]
      });
    }
  };

  removeTodo = (id: number) => {
    // using the id to remove the item from state list
    let ourItem = this.state.todos.filter(function(item: any) {
      return item.id !== id;
    });

    //remove the current item from the todo

    this.setState({
      todos: ourItem
    });
  };

  list() {
    return this.state.todos.map((item: any) => {
      return (
        <TodoItem
          title={item.title}
          key={item.id}
          id={item.id}
          remove={this.removeTodo.bind(this)}
        />
      );
    });
  }

  public componentDidCatch(Error: Error) {
    console.log('Oh no, ther is an error' + Error);
  }

  throwAnError() {
    throw new Error('Bad Error');
  }

  render() {
    console.log(this.state);
    return (
      <div style={TodoComponent}>
        <h2 style={Header}>ToDo</h2>
        <button onClick={this.throwAnError}>Error</button>
        <div>
          <TodoInput createTodo={this.createTodo.bind(this)} />
          <p style={ErrorMessage}>{this.state.error}</p>
          {this.list()}
        </div>
      </div>
    );
  }
}

export default StylingObject;
