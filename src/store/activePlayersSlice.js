import { createSlice } from '@reduxjs/toolkit';
import { allActivePlayersPairs } from '../helpers';

let initialPlayersListFromStorage;

if (window.localStorage) {
    initialPlayersListFromStorage = JSON.parse(window.localStorage.getItem('initialPlayersList'));
}

const initialPlayersList = initialPlayersListFromStorage || {
    0: true,
    1: true,
    2: true,
    3: true
}

const activePlayersSlice = createSlice({
    name: "activePlayers",
    initialState: {
        list: initialPlayersList,
        pairs: allActivePlayersPairs(initialPlayersList)
    },
    reducers: {
        togglePlayer(state, action) {
            state.list = action.payload;
            state.pairs = allActivePlayersPairs(action.payload);
        },
    },
});

const activePlayersActions = activePlayersSlice.actions;
const activePlayersReducer = activePlayersSlice.reducer;

export {
    activePlayersActions,
    activePlayersReducer
}