import { List } from "@mui/material";
import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloCard2 from "./TrelloCard2"; // INTERESTING...TRY CHANGING './TrelloCard2' to '/.TrelloCard' ...for some reason it swaps...
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #ccc;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;

const TrelloList = ({title, cards, listID }) => {
    return(
        <Droppable droppableId={String(listID)}> 
        {provided => (
            <ListContainer 
                {...provided.droppableProps} 
                ref={provided.innerRef}
            >
                <h4>{title}</h4>
                { cards.map((card, index) => (
                    <TrelloCard 
                        key={card.id} 
                        index={index} 
                        text={card.text} 
                        id={card.id} 
                    />
                ))}
                <TrelloActionButton listID={listID} />
                {provided.placeholder}
                {/* <TrelloCard /> */}
                {/* <TrelloCard2 /> */}
            </ListContainer>
        )}
        </Droppable>
    )
};

export default TrelloList;