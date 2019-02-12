import { connect } from 'react-redux';
import UserList, { IUserListProps } from './UserList';
import { IAppState } from '../../../../../store/state';


export default connect<Pick<IUserListProps, 'users'>, null, null, IAppState>((state) => state)(UserList);