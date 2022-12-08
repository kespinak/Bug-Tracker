
import './App.css';
import React, { Component } from 'react'; //THIS ISN'T BEING USED (SEE 'class App extends Component {...')

import { connect } from 'react-redux';
import { render } from 'react-dom';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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
        {/* <div className='App'>  */}
        <div>
          <h2>Hello from bug-tracker\src\App.js in 1st line aka h2-brackets</h2>
          {/* <TrelloList title='hello from components/app.js ->outputting: TrelloList'/> */}
          <Droppable droppableId='all-lists' direction='horizontal' type='list'>
            {provided => (
              <ListContainer 
                {...provided.droppableProps} 
                ref={provided.innerRef}
              > 
                { lists.map((list, index) => (
                  <TrelloList 
                    listID={list.id}
                    key={list.id} 
                    title={list.title} 
                    cards={list.cards} 
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton list />
              </ListContainer>
            )}
          </Droppable>
          <h3>Hello from bug-tracker\src\App.js in 2nd line aka p-brackets</h3>
        </div>
      </DragDropContext>
    )
  }
}

// // * MINOR PROBLEM 1.2
const mapStateToProps = state => ({
  lists: state.lists // lists: state."lists" this comes from "lists": listsReducer in reducers index.js
});

export default connect(mapStateToProps)(App);