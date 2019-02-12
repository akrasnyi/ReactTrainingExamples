import * as React from 'react';
import { IUser } from '../../../../../store/state';
import { Col, Row } from 'react-bootstrap';
import AddUser from '../AddUser/index';
import User from '../../../User/components/User';
import RemoveUser from '../RemoveUser/index';

export interface IUserListProps {
    users: IUser[]
}

interface IUserListState {
    readonly openedUser: string | null;
}

export default class UserList extends React.PureComponent<IUserListProps, IUserListState> {
    public readonly state: IUserListState = { openedUser: null };

    public setOpenedUser = (id: string): void => {
        this.setState({ openedUser: id });
    };

    public render(): React.ReactNode {
        const { users } = this.props;
        const { openedUser } = this.state;

        return (
            <Row>
                <h1>
                    Playground for <b>Debugging React</b> presentation
                </h1>
                <AddUser setOpenedUser={ this.setOpenedUser }/>
                {
                    users.map((user: IUser) => (
                        <Row key={ user.id }>
                            <Col md={ 11 }>
                                <User id={ user.id } isOpenAndFocusCreateEditUser={ user.id === openedUser }/>
                            </Col>
                            <Col md={ 1 }>
                                <RemoveUser id={ user.id }/>
                            </Col>
                        </Row>

                    ))
                }
            </Row>
        );
    }
}
