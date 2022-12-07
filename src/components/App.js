
import './App.css';
import React, { Component } from 'react'; //THIS ISN'T BEING USED (SEE 'class App extends Component {...')

import { connect } from 'react-redux';
import { render } from 'react-dom';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
class App extends Component {

  // todo: reordering logic
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );

    // const lists = this.state.lists;
    // const draggedList = lists[source.droppableId];
    // draggedList.cards.splice(source.index, 1);
    // lists[destination.droppableId].cards.splice(destination.index, 0, draggedList.cards[source.index]);
    // this.setState({ lists });

  };

  render() {
    const { lists } = this.props; //THIS MIGHT HAVE TO MOVE ABOVE RETURN()...
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='App'>
          <h2>Hello from bug-tracker\src\App.js in 1st line aka h2-brackets</h2>
          {/* <TrelloList title='hello from components/app.js ->outputting: TrelloList'/> */}
          <div style={styles.listsContainer}>
            { lists.map(list => (
              <TrelloList 
                listID={list.id}
                key={list.id} 
                title={list.title} 
                cards={list.cards} 
              />
              ))}
              <TrelloActionButton list />
          </div>
          <h3>Hello from bug-tracker\src\App.js in 2nd line aka p-brackets</h3>
        </div>
        </DragDropContext>
    )
  }
}

const styles = {
  listsContainer: {
    display: 'flex', 
    flexdirection: 'row',
  }
}

// // * MINOR PROBLEM 1.2
const mapStateToProps = state => ({
  lists: state.lists // lists: state."lists" this comes from "lists": listsReducer in reducers index.js
});

export default connect(mapStateToProps)(App);