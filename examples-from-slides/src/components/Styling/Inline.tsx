import React from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem';

interface IInlineState {
  todos: any;
  error: string;
}

class StylingInline extends React.PureComponent<any, IInlineState> {
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

  render() {
    console.log(this.state);
    return (
      <div
        style={{
          backgroundColor: '#44014C',
          width: '600px',
          minHeight: '200px',
          margin: '0 auto'
        }}
      >
        <h2
          style={{ padding: '10px 20px', textAlign: 'center', color: 'white' }}
        >
          ToDo
        </h2>
        <div>
          <TodoInput createTodo={this.createTodo.bind(this)} />
          <p
            style={{
              color: 'red',
              fontSize: '20px'
            }}
          >
            {this.state.error}
          </p>
          {this.list()}
        </div>
      </div>
    );
  }
}

export default StylingInline;
