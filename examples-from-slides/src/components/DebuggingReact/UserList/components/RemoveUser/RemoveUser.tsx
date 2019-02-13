import * as React from 'react';
import { Button } from 'react-bootstrap';

export interface IRemoveUserProps {
    id: string;
    removeUser: (id: string) => void;
}

const RemoveUser: React.FunctionComponent<IRemoveUserProps> = ({ id, removeUser }) => (
    <Button onClick={ () => removeUser(id) }>
        <span className="glyphicon glyphicon-minus"/>
    </Button>
);


export default RemoveUser;