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
        default:
            return state;
    }
};

export default listsReducer;