import { Action, Reducer } from 'redux';
import { TAppAction } from '../types/action';
import { IAppState } from '../store/state';

export type TReduceReducers<S, A extends Action> = (...args: any) => Reducer<S, A>;

const reduceReducers: TReduceReducers<IAppState, TAppAction<any>> = (...args) => {

    const initialState = typeof args[args.length - 1] !== 'function' && args.pop();
    const reducers = args;

    if (typeof initialState === 'undefined') {
        throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
    }

    return (prevState, value, ...rest) => {

        const prevStateIsUndefined = typeof prevState === 'undefined';
        const valueIsUndefined = typeof value === 'undefined';

        if (prevStateIsUndefined && valueIsUndefined && initialState) {
            return initialState;
        }

        return reducers.reduce((newState: any, reducer: any) => {
            return reducer.apply(undefined, [newState, value].concat(rest));
        }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
    };
};

export default reduceReducers;