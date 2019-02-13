import * as React from 'react';
import { Button, ControlLabel, FormGroup, Row } from 'react-bootstrap';

export interface IAddUserProps {
    usersAmount: number;
    setOpenedUser: (id: string) => void;
    addUser: (id: string) => void;
}

const AddUser: React.FunctionComponent<IAddUserProps> = ({ usersAmount, addUser, setOpenedUser }) => {

    const addNewUser = (): void => {
        const newId: string = String(usersAmount + 1);
        addUser(newId);
        setOpenedUser(newId);
    };

    return (
        <Row>
            <FormGroup>
                <ControlLabel>Add User</ControlLabel>
                <Button onClick={ addNewUser }>
                    <span className="glyphicon glyphicon-plus"/>
                </Button>
            </FormGroup>
        </Row>
    );
};


export default AddUser;