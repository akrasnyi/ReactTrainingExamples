
export interface IUser {
    id: string;
    name: string;
    surname: string;
}

export interface IAppState {
    users: IUser[];
}