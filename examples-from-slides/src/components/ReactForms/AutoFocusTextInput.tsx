import * as React from 'react';
import CustomTextInput from './CustomTextInput';

class AutoFocusTextInput extends React.Component <{}, {}> {
    public _inputRef: React.RefObject<CustomTextInput> = React.createRef();

    componentDidMount(): void {
        this._inputRef.current!.focusTextInput();
    }

    public render(): React.ReactNode {
        return (
            <div>
                <CustomTextInput ref={ this._inputRef }/>
            </div>
        );
    }
}

export default AutoFocusTextInput;