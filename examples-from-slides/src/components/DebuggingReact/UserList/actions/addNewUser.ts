import { TAppAction } from '../../../../types/action';
import { ADD_USER } from '../constants/index';
import { IUser } from '../../../../store/state';

// Action
export type TAddUser = TAppAction<typeof ADD_USER, IUser>;

// Action Creator
export const addUser = (id: string): TAddUser => ({
    type: ADD_USER,
    payload: { id, name: '', surname: '' }
});
