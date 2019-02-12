import { Reducer } from 'redux';
import { IAppState, IUser } from '../../../../store/state';
import { TUserActions } from '../actions/index';
import { CHANGE_USER_NAME, CHANGE_USER_SURNAME } from '../constants/index';


const defaultState: IAppState['users'] = [{
    id: '1',
    name: 'Mike',
    surname: 'Vazovsky'
}];

export const users: Reducer<IAppState['users'], TUserActions> = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case CHANGE_USER_NAME: {
            const { id, name } = action.payload;

            return state.map((user: IUser) => {
                // Find user with the same id and update his name
                if (user.id === id) {
                    return { id, name, surname: user.surname };
                }

                return user;
            });
        }
        case CHANGE_USER_SURNAME: {
            const { id, surname } = action.payload;

            return state.map((user: IUser) => {
                // Find user with the same id and update his surname
                if (user.id === id) {
                    return { id, name: user.name, surname };
                }

                return user;
            });
        }
        default:
            return state;
    }
};
