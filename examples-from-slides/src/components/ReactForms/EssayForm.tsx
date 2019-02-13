import * as React from 'react';

interface IEssayFormState {
    value: string;
}

class EssayForm extends React.Component <{}, IEssayFormState> {
    public readonly state: IEssayFormState = {
        value: 'Please write an essay about your favorite DOM element.'
    };

    private _handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.setState({ value: event.target.value });
    };

    private _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        alert(`An essay was submitted: ${this.state.value}`);
        event.preventDefault();
    };

    public render(): React.ReactNode {
        return (
            <form onSubmit={ this._handleSubmit }>
                <label>
                    Essay:
                    <textarea value={ this.state.value } onChange={ this._handleChange }/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default EssayForm;