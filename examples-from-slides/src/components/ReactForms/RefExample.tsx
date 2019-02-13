import * as React from 'react';


class RefExample extends React.Component <{}, {}> {
    private _myRef: React.RefObject<HTMLDivElement> = React.createRef();

    public render(): React.ReactNode {
        return (
            <div ref={ this._myRef }/>
        );
    }
}

export default RefExample;