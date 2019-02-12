import * as React from 'react';

type TFlavor = 'coconut' | 'grapefruit' | 'lime' | 'mango';

interface IFlavorFormState {
    value: TFlavor;
}

class FlavorForm extends React.Component <{}, IFlavorFormState> {
    public readonly state: IFlavorFormState = { value: 'coconut' };

    private _handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        this.setState({ value: event.target.value as TFlavor });
    };

    private _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        alert(`Your favorite flavor is: ${this.state.value}`);
        event.preventDefault();
    };

    public render(): React.ReactNode {
        return (
            <form onSubmit={ this._handleSubmit }>
                <label>
                    Pick your favorite flavor:
                    <select value={ this.state.value } onChange={ this._handleChange }>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default FlavorForm;