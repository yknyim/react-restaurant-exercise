import React from 'react';
import './App.css';
import Types from './Types';
import Restaurants from './Restaurants';
import Menu from './Menu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Types of Restaurants
          <Types />
          List of Restaurants
          <Restaurants />
          List of Food
          <Menu />
        </header>
      </div>
    );
  }
}

export default App;
