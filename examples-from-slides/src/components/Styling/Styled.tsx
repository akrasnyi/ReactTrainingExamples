import React from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem';
import styled from 'styled-components';

interface IInlineState {
  todos: any;
  error: string;
}

const TagComponent = styled.div`
  background-color: #1cb3ac;
  width: 600px;
  min-height: 200px;
  margin: 30px auto;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Header = styled.h2`
  padding: 10px 20px;
  text-align: center;
  color: white;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 20px;
`;

class StylingStyledComponent extends React.PureComponent<any, IInlineState> {
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
      <TagComponent>
        <Header>ToDo</Header>
        <div>
          <TodoInput createTodo={this.createTodo.bind(this)} />
          <ErrorMessage>{this.state.error}</ErrorMessage>
          {this.list()}
        </div>
      </TagComponent>
    );
  }
}

export default StylingStyledComponent;
