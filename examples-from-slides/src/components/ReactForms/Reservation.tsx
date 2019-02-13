import * as React from 'react';

interface IReservationState {
    isGoing: boolean;
    numberOfGuests: number;
}

type TReservationState = keyof IReservationState;

class Reservation extends React.Component <{}, IReservationState> {
    public readonly state: IReservationState = { isGoing: true, numberOfGuests: 2 };

    private _handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        const value: string | boolean = target.type === 'checkbox' ? target.checked : target.value;
        const name: TReservationState = target.name as TReservationState;

        this.setState({
            [name]: value
        } as unknown as IReservationState);
    };

    public render(): React.ReactNode {
        return (
            <form>
                <label>
                    Is going:
                    <input name="isGoing" type="checkbox" checked={ this.state.isGoing }
                           onChange={ this._handleInputChange }/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input name="numberOfGuests" type="number" value={ this.state.numberOfGuests }
                           onChange={ this._handleInputChange }/>
                </label>
            </form>
        );
    }
}

export default Reservation;