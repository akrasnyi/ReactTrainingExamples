import * as React from 'react';

interface INameFormState {
    value: string;
}

class NameForm extends React.Component <{}, INameFormState> {
    public readonly state: INameFormState = { value: '' };

    private _handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
    };

    private _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        alert(`A name was submitted: ${this.state.value}`);
        event.preventDefault();
    };

    public render(): React.ReactNode {
        return (
            <form onSubmit={ this._handleSubmit }>
                <label>
                    Name:
                    <input type="text" value={ this.state.value } onChange={ this._handleChange }/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm;