import * as constants from '../constants';

export interface IAddTodo {
    type: constants.ADD_TODO,
    title: string
}
export interface IEditTodo {
    type: constants.ADD_TODO,
    title: string
}
// action creator function
export const addTodo = (title: string):IAddTodo => {
    // action
    return {
        type: constants.ADD_TODO,
        title
    }
}
export const editTodo = (title: string):IEditTodo => {
    // action
    return {
        type: constants.ADD_TODO,
        title
    }
}

export type IToDoAction = IAddTodo | IEditTodo;