import React from 'react';
import { IProps, IState, IUser } from '../interfaces';
import ListItem from './ListItem';
import MyForm from './forms';

const data = [
    { name: 'Evgene', age: 23 },
    { name: 'Artem', age: 19 },
    { name: 'Pedro', age: 28,  isHaveDog: true },
];

class MyList extends React.Component<IProps, IState> {

    public state: IState = {
        users: [],
        isLoading: false,
        isAddingNewItem: false
    }

    public componentDidMount() {
        this.loadData()
    }
    

    loadData = (): void => {
        this.setState((prevState) => ({ isLoading: true }));
        setTimeout(() => {
            this.setState((prevState: IState) => {
                return {
                    users: data,
                    isLoading: false
                }
            })
        }, 2000)
    }

    renderList = (): JSX.Element => {
        const { users }: IState = this.state;
        return (
            <ul>
                {users.map((el: IUser, key) => (
                    <ListItem key={key} {...el} /> 
                ))}
            </ul>
        )
    }

    addNewItem = () => {
        this.setState((prevState) => ({
            isAddingNewItem: true
        }))
    }

    saveNewItem = (user: IUser): void => {
        this.setState({
            users: [...this.state.users, user],
            isAddingNewItem: false
        })
    }

    render() {
        const { isLoading, isAddingNewItem } : IState = this.state;
        return (
            <React.Fragment>
                <button onClick={this.addNewItem}>Add New Item</button>
                {isAddingNewItem && <MyForm onSave={this.saveNewItem} />}
                {isLoading ? 'Please wait 2 sec' : this.renderList()}
            </React.Fragment>
        )
    }
}
export default MyList;