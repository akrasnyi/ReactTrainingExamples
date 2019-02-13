import * as React from 'react';
import { Col, Row } from 'react-bootstrap';


export interface IUserViewProps {
    id: string;
    name: string;
    surname: string;
}

const UserView: React.FunctionComponent<IUserViewProps> = ({ name, surname }) => {
    return (
        <Row>
            <Col md={ 6 }>
                <b>User name: </b> <h4 className="inline">{ name }</h4>
            </Col>
            <Col md={ 6 }>
                <b>User surname: </b> <h4 className="inline">{ surname }</h4>
            </Col>
        </Row>
    );
};

export default UserView;