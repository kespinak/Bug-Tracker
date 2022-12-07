//PROBLEM1: CONST { LISTS } = THIS.PROPS...EVER SINCE I ADDED THIS LINE, <APP/> COMPONENT WONT RENDER

import './App.css';
import React, { Component } from 'react'; //THIS ISN'T BEING USED (SEE 'class App extends Component {...')
import TrelloList from './TrelloList';

import { connect } from 'react-redux';
import { render } from 'react-dom';

// class App extends Component { // 5:30min
// function App() {
//   // * BIG PROBLEM 1.1 (LOOK BELOW & ALSO LOOK UNDER RETURN() FOR {LISTS.MAP...})
//   return (
//     <React.Fragment>
//       const { lists } = this.props; //THIS MIGHT HAVE TO MOVE ABOVE RETURN()...
//       <div className='App'>
//         <h2>Hello from bug-tracker\src\App.js in 1st line aka h2-brackets</h2>
//         {/* { lists.map(list => (<TrelloList title={list.title} cards={lists.cards} />))} */}
//         <TrelloList title='hello from components/app.js ->outputting: TrelloList'/>
//       </div>zxc 
//       <h3>Hello from bug-tracker\src\App.js in 2nd line aka p-brackets</h3>
//     </React.Fragment>
//   );
// }

// * BIG PROBLEM: LOOK UNDER RENDER() FOR {LISTS.MAP}
class App extends Component {
  render() {
    const { lists } = this.props; //THIS MIGHT HAVE TO MOVE ABOVE RETURN()...
    return (
        <div className='App'>
          <h2>Hello from bug-tracker\src\App.js in 1st line aka h2-brackets</h2>
          <TrelloList title='hello from components/app.js ->outputting: TrelloList'/>
          {/* {console.log('test')} */}
          {/* I FIXED LISTS.MAP BY ADDING A "?".... because value of lists is undefined*/}
          { lists?.map(list => (
            <TrelloList title={list.title} cards={list.cards} />
            ))}
          <h3>Hello from bug-tracker\src\App.js in 2nd line aka p-brackets</h3>
        </div>
    )
  }
}

// // * MINOR PROBLEM 1.2
const mapStateToProps = state => ({
  lists: state.lists // lists: state."lists" this comes from "lists": listsReducer in reducers index.js
});

export default connect(mapStateToProps)(App); // * BIG PROBLEM 1.3 =  
// export default connect(mapStateToProps);
// export default App;
