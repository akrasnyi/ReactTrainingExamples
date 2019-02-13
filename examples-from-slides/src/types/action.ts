import { Action } from 'redux';
import { TUserListActions } from '../components/DebuggingReact/UserList/actions/index';
import { TUserActions } from '../components/DebuggingReact/User/actions';


export type TAppAction<T, P = null> = Action<T> & (
    P extends Error ? { error: P } :
        P extends NonNullable<P> ? { payload: P } :
            {}
    );

export type TActions = TUserListActions | TUserActions;