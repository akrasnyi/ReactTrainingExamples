import { TAppAction } from '../../../../types/action';
import { CHANGE_USER_NAME } from '../constants/index';

type TChangeUserNamePayload = { id: string, name: string };

export type TChangeUserName = TAppAction<typeof CHANGE_USER_NAME, TChangeUserNamePayload>;

export const changeUserName = (id: string, name: string): TChangeUserName => ({
    type: CHANGE_USER_NAME,
    payload: { id, name }
});

