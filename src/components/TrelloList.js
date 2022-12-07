import { List } from "@mui/material";
import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloCard2 from "./TrelloCard2"; // INTERESTING...TRY CHANGING './TrelloCard2' to '/.TrelloCard' ...for some reason it swaps...
import TrelloActionButton from './TrelloActionButton';

const TrelloList = ({title, cards, listID }) => {
    return(
        <div style={StyleSheet.container}>
            <h4>{title}</h4>
            { cards.map(card => (
                <TrelloCard key={card.id} text={card.text} />
            ))}
            <TrelloActionButton listID={listID} />
            {/* <TrelloCard /> */}
            {/* <TrelloCard2 /> */}
        </div>
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