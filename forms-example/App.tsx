import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/Button';
import MyList from './components/List';

class MyDiv extends Component {
  render(){
    return <div>Text inside</div>
  }
}

class App extends Component {
  render() {
    // const name = 'Torgier'
    return (
      <div>
        <header >
         Hello world
        </header>
        {name || 'Stale'}
        <MyDiv></MyDiv>
        <MyButton />
        <MyList />
      </div>
    );
  }
}

export default App;
