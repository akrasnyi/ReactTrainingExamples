import { TAppAction } from '../../../../types/action';
import { CHANGE_USER_SURNAME } from '../constants/index';

type TChangeUserSurnamePayload = { id: string, surname: string };

export type TChangeUserSurname = TAppAction<typeof CHANGE_USER_SURNAME, TChangeUserSurnamePayload>;

export const changeUserSurname = (id: string, surname: string): TChangeUserSurname => ({
    type: CHANGE_USER_SURNAME,
    payload: { id, surname }
});

