import { connect } from 'react-redux';

import UserView, { IUserViewProps } from './UserView';
import { IAppState, IUser } from '../../../../../store/state';


export default connect<Pick<IUserViewProps, 'name' | 'surname'>,
    null,
    { id: string },
    IAppState>((state, { id }) => {
        const user = state.users.find((user: IUser) => user.id === id);

        return {
            name: user ? user.name : '',
            surname: user ? user.surname : ''
        };
    },
)(UserView);