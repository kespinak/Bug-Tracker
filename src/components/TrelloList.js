import { List } from "@mui/material";
import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloCard2 from "./TrelloCard2"; // INTERESTING...TRY CHANGING './TrelloCard2' to '/.TrelloCard' ...for some reason it swaps...
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({title, cards, listID }) => {
    return(
        <Droppable droppableId={String(listID)}> 
        {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={StyleSheet.container}>
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
            </div>
        )}
        </Droppable>
    )
};

const StyleSheet = {
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: '100%',
        marginRight: 8,
    }
};

export default TrelloList;