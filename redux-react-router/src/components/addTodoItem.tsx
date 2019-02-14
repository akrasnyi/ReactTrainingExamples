import React from 'react';
export interface IAddTodoItem {
    todoItem: string;
}
export interface IPropsAddTodoItem {
    addTodoItem: (title: string) => void
}
class AddTodoItem extends React.Component<IPropsAddTodoItem, IAddTodoItem> {
    public state = {
        todoItem: ''
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            todoItem: e.target.value
        })
    }
    saveTodo = () => {
        this.props.addTodoItem(this.state.todoItem)
    }
    render() {
        return (
            <React.Fragment>
                <input value={this.state.todoItem} onChange={this.handleChange} />
                <button onClick={this.saveTodo}>Add Todo Item</button>
            </React.Fragment>
        )
    }
}
export default AddTodoItem;