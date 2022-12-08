import { List } from "@mui/material";
import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloCard2 from "./TrelloCard2"; // INTERESTING...TRY CHANGING './TrelloCard2' to '/.TrelloCard' ...for some reason it swaps...
import TrelloActionButton from './TrelloActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #ccc;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;

const TrelloList = ({title, cards, listID, index }) => {
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer 
                    {...provided.draggableProps} 
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)}> 
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef} >
                                <h4>{title}</h4>
                                { cards.map((card, index) => (
                                    <TrelloCard 
                                        key={card.id} 
                                        index={index} 
                                        text={card.text} 
                                        id={card.id} 
                                    />
                                ))}
                                {provided.placeholder}
                                <TrelloActionButton listID={listID} />
                                {/* <TrelloCard /> */}
                                {/* <TrelloCard2 /> */}
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    )
};

export default TrelloList;