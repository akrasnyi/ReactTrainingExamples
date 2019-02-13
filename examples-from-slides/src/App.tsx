import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Forms from './components/ReactForms';
import UserList from './components/DebuggingReact/UserList/components/UserList';
import NavigationPanel, {
  NavigationLink
} from './components/common/NavigationPanel/NavigtionPanel';
import Styling from './components/Styling';

const mainMenu: NavigationLink[] = [
  { name: 'Forms', path: '/forms' },
  { name: 'User List', path: '/user-list' },
  { name: 'Styling', path: '/styling' }
];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <NavigationPanel links={mainMenu} />

            <Route path='/forms' component={Forms} />
            <Route path='/user-list' component={UserList} />
            <Route path='/styling' component={Styling} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
