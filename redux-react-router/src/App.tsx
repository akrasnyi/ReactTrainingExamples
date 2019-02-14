import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import AddTodoItemContainer from './containers/AddTodoItemContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to='/todoform'> Todo Form </Link>
              </li>
              <li>
                <Link to='/todolist'> Todo List </Link>
              </li>
            </ul>
          <Route path='/todoform' component={AddTodoItemContainer} />
          <Route path='/todolist' component={TodoListContainer} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
 