import './App.css';
import React, { Component } from 'react'; //THIS ISNT BEING USED (SEE 'class App extends Component {...')
import TrelloList from './TrelloList';

// class App extends Component { // 5:30min
function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <h2>Hello from bug-tracker\src\App.js in 1st line aka h2-brackets</h2>
        <TrelloList />
      </div>
      <h3>Hello from bug-tracker\src\App.js in 2nd line aka p-brackets</h3>
    </React.Fragment>
  );
}

export default App;
