import { TAppAction } from '../../../../types/action';
import { REMOVE_USER } from '../constants/index';

type TRemoveUserPayload = { id: string };

// Action
export type TRemoveUser = TAppAction<typeof REMOVE_USER, TRemoveUserPayload>;

// Action Creator
export const removeUser = (id: string): TRemoveUser => ({
    type: REMOVE_USER,
    payload: { id }
});
