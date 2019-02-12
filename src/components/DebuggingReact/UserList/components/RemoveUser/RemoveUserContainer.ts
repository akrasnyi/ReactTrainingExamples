import { connect } from 'react-redux';
import RemoveUser, { IRemoveUserProps } from './RemoveUser';
import { IAppState } from '../../../../../store/state';
import { removeUser as removeUserAction } from '../../actions/index';


export default connect<null, Pick<IRemoveUserProps, 'removeUser'>, { id: string }, IAppState>(
    null,
    ((dispatch, { id }) => ({
        removeUser() { dispatch(removeUserAction(id)); }
    }))
)(RemoveUser);