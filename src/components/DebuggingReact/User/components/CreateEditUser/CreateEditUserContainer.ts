import { connect } from 'react-redux';
import CreateEditUser, { ICreateEditUserProps } from './CreateEditUser';
import { IAppState, IUser } from '../../../../../store/state';
import { changeUserName, changeUserSurname } from '../../actions/index';


export default connect<Pick<ICreateEditUserProps, 'name' | 'surname'>,
    Pick<ICreateEditUserProps, 'changeUserName' | 'changeUserSurname'>,
    { id: string },
    IAppState>((state, { id }) => {
        const user = state.users.find((user: IUser) => user.id === id);

        return {
            name: user ? user.name : '',
            surname: user ? user.surname : ''
        };
    },
    (dispatch, { id }) => ({
        changeUserName(name) { dispatch(changeUserName(id, name));},
        changeUserSurname(surname) { dispatch(changeUserSurname(id, surname));}
    })
)(CreateEditUser);