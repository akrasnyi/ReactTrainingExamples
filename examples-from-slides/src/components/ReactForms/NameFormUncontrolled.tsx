import * as React from 'react';

class NameFormUncontrolled extends React.Component <{}, {}> {
    private _inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    private _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        alert(`A name was submitted: ${this._inputRef.current!.value}`);
        event.preventDefault();
    };

    public render(): React.ReactNode {
        return (
            <form onSubmit={ this._handleSubmit }>
                <label>
                    Name:
                    <input type="text" defaultValue="Mike Vazovsky" ref={ this._inputRef }/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameFormUncontrolled;