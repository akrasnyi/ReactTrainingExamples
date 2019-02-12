import * as React from 'react';


class CustomTextInput extends React.Component <{}, {}> {
    // Create a ref to store the textInput DOM element
    private _inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    public focusTextInput = (): void => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this._inputRef.current!.focus();
    };

    public render(): React.ReactNode {
        // Tell React that we want to associate the <input> ref with the `_inputRef`
        return (
            <div>
                <input
                    type="text"
                    ref={ this._inputRef }/>

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={ this.focusTextInput }
                />
            </div>
        );
    }
}

export default CustomTextInput;