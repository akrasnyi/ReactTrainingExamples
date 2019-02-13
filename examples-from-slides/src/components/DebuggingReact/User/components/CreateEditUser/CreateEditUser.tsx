import * as React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

export interface ICreateEditUserProps {
    id: string;
    name: string;
    surname: string;
    changeUserName: (name: string) => void;
    changeUserSurname: (surname: string) => void;
    hideCreateEditUserForm: () => void;
}

const CreateEditUser: React.FunctionComponent<ICreateEditUserProps> = (
    {
        id, name, surname, changeUserName, changeUserSurname, hideCreateEditUserForm
    }
) => {


    const handlerSubmitForm = (e: React.FormEvent<Form>): void => {
        e.preventDefault();
        // Take "Name" input value
        const newName = e.target[0].value;
        // If newName is different - change user name
        (name !== newName) && (changeUserName(newName));

        // Take "Surname" input value
        const newSurname = e.target[1].value;
        // If newSurname is different - change user surname
        (surname !== newSurname) && (changeUserSurname(newSurname));
        // Call hideCreateEditForm callback
        hideCreateEditUserForm();
    };

    return (
        <Form inline className="User-form" onSubmit={ handlerSubmitForm }>
            <FormGroup controlId="UserName" className="User-form-input">
                <ControlLabel>Name</ControlLabel>
                <FormControl placeholder="Name" autoFocus={ true } defaultValue={ name }/>
            </FormGroup>

            <FormGroup controlId="UserSurname" className="User-form-input">
                <ControlLabel>Surname</ControlLabel>
                <FormControl placeholder="Surname" defaultValue={ surname }/>
            </FormGroup>

            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default CreateEditUser;