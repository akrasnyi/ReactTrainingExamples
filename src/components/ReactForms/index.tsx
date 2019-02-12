import * as React from 'react';
import AutoFocusTextInput from './AutoFocusTextInput';
import CustomTextInput from './CustomTextInput';
import EssayForm from './EssayForm';
import FileInput from './FileInput';
import FlavorForm from './FlavorForm';
import NameForm from './NameForm';
import NameFormUncontrolled from './NameFormUncontrolled';
import Reservation from './Reservation';
import { Route, Switch } from 'react-router-dom';
import NavigationPanel, { NavigationLink } from '../common/NavigationPanel/NavigtionPanel';


const formlinks: NavigationLink[] = [
    { name: 'Auto focus text input', path: '/forms/auto-focus-text-input' },
    { name: 'Custom text input', path: '/forms/custom-text-input' },
    { name: 'Essay form', path: '/forms/essay-form' },
    { name: 'File input', path: '/forms/file-input' },
    { name: 'Flavor form', path: '/forms/flavor-form' },
    { name: 'Name form', path: '/forms/name-form' },
    { name: 'Name form uncontrolled', path: '/forms/name-form-uncontrolled' },
    { name: 'Reservation', path: '/forms/reservation' },
];

const Forms: React.FunctionComponent<null> = () => {
    return (

        <div>
            <h1>Examples for <b>React Forms</b> presentation</h1>
            <NavigationPanel links={ formlinks }/>

            <Switch>
                <Route path='/forms/auto-focus-text-input' component={ AutoFocusTextInput }/>
                <Route path='/forms/custom-text-input' component={ CustomTextInput }/>
                <Route path='/forms/essay-form' component={ EssayForm }/>
                <Route path='/forms/file-input' component={ FileInput }/>
                <Route path='/forms/flavor-form' component={ FlavorForm }/>
                <Route path='/forms/name-form' component={ NameForm }/>
                <Route path='/forms/name-form-uncontrolled' component={ NameFormUncontrolled }/>
                <Route path='/forms/reservation' component={ Reservation }/>
            </Switch>

        </div>
    );
};

export default Forms;