import { GlobalStore, ITodo } from "../types";
import { IToDoAction } from "../actions";
import * as constants from '../constants';

const initialState: GlobalStore = {
    todoList: []
}

const todoReducer = (state: GlobalStore = initialState, action: IToDoAction): GlobalStore => {
    switch (action.type) {
        case constants.ADD_TODO: {
            const todo: ITodo = {
                id: '1', // need use unique  key
                title: action.title
            }
            return {
                todoList: [...state.todoList, todo]
            }
        }
        default:
            return state;
    }
}

export const createNewFunc = () => {};
export default todoReducer;