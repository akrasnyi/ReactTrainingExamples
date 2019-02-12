import React from 'react';
import { IUser, IAddNewItemListForm } from '../interfaces';

class MyForm extends React.PureComponent<IAddNewItemListForm, IUser> {
    public state: IUser = {
        age: 0,
        isHaveDog: false,
        name: ''
    }

    handleInputName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            name: e.target.value
        });
    }
    
    handleInputAge = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            age: +e.target.value
        });
    }
    
    handleInputIsHaveDog = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            isHaveDog: e.target.checked ? true : false
        });
    }

    saveForm = (): void => {
        const data: IUser = this.state
        this.props.onSave(data);
    }
    render() {
        console.log('this.state', this.state);
        return (
            <React.Fragment>
                <div>
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.handleInputName} />
                </div>
                <div>
                    <label>Age:</label>
                    <input value={this.state.age} onChange={this.handleInputAge}/>
                </div>
                <div>
                    <label>Is Have a dog</label>
                    <input
                        value={this.state.isHaveDog ? 'checked' : 'unchecked'}
                        type="checkbox"
                        onChange={this.handleInputIsHaveDog}
                    />
                </div>
                <button onClick={this.saveForm}>Save</button>
            </React.Fragment>
        )
    }
}

export default MyForm;