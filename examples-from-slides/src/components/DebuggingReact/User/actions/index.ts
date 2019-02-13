import { TChangeUserName } from './changeUserName';
import { TChangeUserSurname } from './changeUserSurname';


export type TUserActions = TChangeUserName
    | TChangeUserSurname;

export * from './changeUserName';
export * from './changeUserSurname';