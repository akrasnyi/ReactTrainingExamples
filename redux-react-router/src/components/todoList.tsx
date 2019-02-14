import React from 'react';
import { ITodo } from '../types';

export interface ITodoList {
    todoList: ITodo[]
}

class TodoList extends React.Component<ITodoList, {}> {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todoList.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;