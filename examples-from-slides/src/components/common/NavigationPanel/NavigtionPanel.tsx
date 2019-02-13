import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export type NavigationLink = {
    path: string,
    name: string
}

interface INavigationPanelProps {
    links: NavigationLink[]
}

const NavigationPanel: React.FunctionComponent<INavigationPanelProps> = ({ links }) => (
    <Navbar className='navigation-panel'>
        <Nav>
            {
                links.map((link: NavigationLink, i: number) => (
                    <NavLink className='mr-2' activeClassName='active-link'  to={ link.path } key={ i }>
                        { link.name }
                    </NavLink>
                ))
            }
        </Nav>
    </Navbar>
);

export default NavigationPanel;