import * as React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import UserView from './UserView/index';
import CreateEditUser from './CreateEditUser/index';

interface IUserProps {
    id: string;
    isOpenAndFocusCreateEditUser?: boolean;
}

interface IUserState {
    isVisibleCreateEditForm: boolean;
}

class User extends React.Component <IUserProps, IUserState> {
    public readonly state: IUserState = { isVisibleCreateEditForm: !!this.props.isOpenAndFocusCreateEditUser };

    public hideCreateEditForm = (): void => {
        this.setState({ isVisibleCreateEditForm: false });
    };

    public render(): React.ReactNode {
        const { id } = this.props;
        const { isVisibleCreateEditForm } = this.state;

        return (
            <Row key={ id }>
                <Col md={ 10 }>
                    <UserView id={ id }/>
                    {
                        isVisibleCreateEditForm && (
                            <CreateEditUser id={ id } hideCreateEditUserForm={ this.hideCreateEditForm }/>
                        )
                    }
                </Col>
                <Col md={ 2 }>
                    <Button onClick={ this._showCreateEditForm }>
                        <span className="glyphicon glyphicon-pencil"/>
                    </Button>
                    {
                        isVisibleCreateEditForm && (
                            <Button onClick={ this.hideCreateEditForm }>
                                <span className="glyphicon glyphicon-remove"/>
                            </Button>
                        )
                    }
                </Col>

            </Row>
        );
    }

    private _showCreateEditForm = (): void => {
        this.setState({ isVisibleCreateEditForm: true });
    };
}

export default User;