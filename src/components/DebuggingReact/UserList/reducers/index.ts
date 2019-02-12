import { Reducer } from 'redux';
import { IAppState, IUser } from '../../../../store/state';
import { TUserListActions } from '../actions/index';
import { ADD_USER, REMOVE_USER } from '../constants/index';


const defaultState: IAppState['users'] = [{
    id: '1',
    name: 'Mike',
    surname: 'Vazovsky'
}];

export const userList: Reducer<IAppState['users'], TUserListActions> = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload];
        case REMOVE_USER:
            return state.filter((user: IUser) => user.id !== action.payload.id);

        default:
            return state;
    }
};
