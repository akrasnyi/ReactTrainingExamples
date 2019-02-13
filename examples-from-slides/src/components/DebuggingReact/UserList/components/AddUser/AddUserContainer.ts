import { connect } from 'react-redux';
import AddUser, { IAddUserProps } from './AddUser';
import { IAppState } from '../../../../../store/state';
import { addUser as addUserAction } from '../../actions/index';


export default connect<Pick<IAddUserProps, 'usersAmount'>, Pick<IAddUserProps, 'addUser'>, null, IAppState>(
    (state) => ({ usersAmount: state.users.length }),
    (dispatch => ({
        addUser(id: string) { dispatch(addUserAction(id)); }
    }))
)(AddUser);