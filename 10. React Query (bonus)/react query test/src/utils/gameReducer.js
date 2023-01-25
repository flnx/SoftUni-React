export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GAMES':
            return action.payload.map((x) => ({ ...x, comments: [] }));

        case 'ADD_GAME':
            return [...state, action.payload];

        case 'DELETE_GAME':
            return state.filter((game) => game._id !== action.gameId);

        case 'EDIT_GAME':
            return state.map((game) =>
                game._id == action.gameId ? action.payload : game
            );

        default:
            return state;
    }
};