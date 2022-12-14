// * LOOK FOR GREEN MARKERS FOR ERRORS
// * 1 BUG: WHEN DRAGGING A CARD THE "ADD ANOTHER CARD" BUTTON MOVES WEIRDLY...

import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 5; //14:59 P4

const initialState = [
    {
        id: `list-${0}`,
        title: 'Todo',
        cards: [
            {
                id: `card-${0}`,
                text: 'we created a static list & static card'
            },
            {
                id: `card-${1}`,
                text: 'we used a mix between material UI, React, and Styled components'
            }
        ]
    },
    {
        title: 'In Progress',
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: 'we will create our first reducer'
            },
            {
                id: `card-${3}`,
                text: 'and render many cards on our list with static data'
            },
            {
                id: `card-${4}`,
                text: 'we will also create our first action creator'
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST: {
            const newList = {
                id: `list-${listID}`, 
                title: action.payload.title, //11:50 P4
                cards: [],
            }
            listID += 1;
            return [...state, newList];
        }

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                id: `card-${listID}`, // * SHOULD USE WHAT COPILATE IS SUGGESTING? "id: action.payload.cardID" AT 15:35 p4
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

        case CONSTANTS.DRAG_HAPPENED: {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type,
            } = action.payload;
            const newState = [...state];

            // dragging lists around
            if(type === "list") {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            // in the same list
            if(droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            // other list
            if(droppableIdStart !== droppableIdEnd) {
                // find the list where drag happened
                const listStart = state.find(list => droppableIdStart === list.id);

                // pull out the card from this list
                const card = listStart.cards.splice(droppableIndexStart, 1);

                // find the list where drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id);

                // put the card in the new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            };
            return newState;
        }

        default:
            return state;
    }
};

export default listsReducer;