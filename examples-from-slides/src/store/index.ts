import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduceReducers from '../utils/reduceReducers';
import { users } from '../components/DebuggingReact/User/reducers';
import { userList } from '../components/DebuggingReact/UserList/reducers';

const userReducer = reduceReducers(users, userList);

export default createStore(
    combineReducers({
        users: userReducer
    }),
    composeWithDevTools()
);