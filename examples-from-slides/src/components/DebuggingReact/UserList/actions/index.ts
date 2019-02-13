import { TAddUser } from './addNewUser';
import { TRemoveUser } from './removeUser';

export type TUserListActions = TAddUser | TRemoveUser;

export * from './addNewUser';
export * from './removeUser';