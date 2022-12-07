const initialState = [
    {
        title: 'Todo',
        id: 0,
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
    }
];

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listsReducer;