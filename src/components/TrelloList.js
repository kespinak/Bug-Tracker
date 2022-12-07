import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloCard2 from "./TrelloCard2"; // INTERESTING...TRY CHANGING './TrelloCard2' to '/.TrelloCard' ...for some reason it swaps...

const TrelloList = ({title}) => {
    return(
        <div style={StyleSheet.container}>
            <h4>{title}</h4>
            <TrelloCard />
            {/* <TrelloCard2 /> */}
        </div>
    )
};

const StyleSheet = {
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
};

export default TrelloList;