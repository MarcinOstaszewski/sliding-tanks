import { createSlice, configureStore } from "@reduxjs/toolkit";

const gameStateSlice = createSlice({
    name: "gameState",
    initialState: "",
    reducers: {
        changeGameState(state, action) {
            return action.payload
        }
    }
})

const activePlayersSlice = createSlice({
    name: "activePlayers",
    initialState: {
        0: true,
        1: true,
        2: true,
        3: true,
    },
    reducers: {
        togglePlayer(state, action) {
            state[action.payload] = !state[action.payload]
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

export default store;
