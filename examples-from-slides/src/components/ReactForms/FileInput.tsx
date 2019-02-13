import * as React from 'react';

class FileInput extends React.Component <{}, {}> {
    private _inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    private _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const files: FileList = this._inputRef.current!.files as FileList;
        alert(`Selected file - ${files[0].name}`);
    };

    public render(): React.ReactNode {
        return (
            <form onSubmit={ this._handleSubmit }>
                <label>
                    Upload file:
                    <input type="file" ref={ this._inputRef }/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FileInput;