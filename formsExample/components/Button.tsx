import React from 'react';

interface IState {
    counter: number
}

interface IProps {}

class MyButton extends React.Component<IProps, IState> {
    public state: IState;

    constructor(props: IProps) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        // this.setState({ counter: this.state.counter });
        this.setState((prevState: IState) => ({
            counter: prevState.counter + 1
        }))
    }
    
    render() {
        return (
            <React.Fragment>
                <div>{this.state.counter}</div>
                <button onClick={this.handleClick}>Click!</button>
            </React.Fragment>
        )
    }
}
export default MyButton;