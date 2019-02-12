import React from 'react';
import { IUser } from '../interfaces';

const ListItem = (props: IUser) => (
    <li>{`
        My name is ${props.name}, 
        i'm ${props.age}
        ${props.isHaveDog ? 'and i have a dog' : ''}
        `}
    </li>
)

export default ListItem;