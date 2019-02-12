import React from 'react';
interface IToDoList {
    inputValue: string;
    todos:any 
}

class ToDoList extends React.Component<{}, IToDoList> {
    public state: IToDoList = {
        inputValue: '',
        todos: []
    }

    save = () => {
        this.setState({
            inputValue: '',
            todos: [...this.state.todos, this.state.inputValue]
        })
    }

    handleChange = (e: any) => {
        this.setState({inputValue: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button onClick={this.save}>Save</button>
                <table>
                    {
                        this.state.todos
                            .map((el: any, key: any) => (
                                <tr key={key}><td>{el}</td></tr>
                            ))
                    }
                </table>
            </React.Fragment>
        )
    }
}

export default ToDoList