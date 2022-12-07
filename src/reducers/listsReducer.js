// * LOOK FOR GREEN MARKERS FOR ERRORS

import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 3; //14:59 P4

const initialState = [
    {
        id: 0,
        title: 'Todo',
        cards: [
            {
                id: 0,
                text: 'we created a static list & static card'
            },
            {
                id: 1,
                text: 'we used a mix between material UI, React, and Styled components'
            }
        ]
    },
    {
        title: 'In Progress',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'we will create our first reducer'
            },
            {
                id: 1,
                text: 'and render many cards on our list with static data'
            },
            {
                id: 2,
                text: 'we will also create our first action creator'
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST: {
            const newList = {
                id: listID, 
                title: action.payload.title, //11:50 P4
                cards: [],
            }
            listID += 1;
            return [...state, newList];
        }
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                id: cardID, // * SHOULD USE WHAT COPILATE IS SUGGESTING? "id: action.payload.cardID" AT 15:35 p4
                text: action.payload.text,
            }
            cardID += 1;

            const newState = state.map(list => { 
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            return newState;
        }
        default:
            return state;
    }
};

export default listsReducer;