import { createSlice, configureStore } from "@reduxjs/toolkit";
import { allActivePlayersPairs } from '../helpers';
import { playersData } from './playersData';
import { goalData } from './goalData';

const gameStateSlice = createSlice({
    name: "gameState",
    initialState: "",
    reducers: {
        changeGameState(state, action) {
            return action.payload
        }
    }
})

const initialPlayersList = {
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

const store = configureStore({
    reducer: {
        activePlayers: activePlayersSlice.reducer,
        gameState: gameStateSlice.reducer
    },
});

export const activePlayersActions = activePlayersSlice.actions;
export const gameStateSliceActions = gameStateSlice.actions;
export {
    playersData,
    goalData
}

export default store;
