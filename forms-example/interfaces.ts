export interface IUser {
    name: string;
    age: number;
    isHaveDog?: boolean;
}

export interface IState {
    users: IUser[];
    isLoading: boolean;
    isAddingNewItem: boolean;
}

export interface IProps {}

export interface IAddNewItemListForm {
    onSave: (user: IUser) => void
}