import { createSlice } from '@reduxjs/toolkit';

const gameStateSlice = createSlice({
    name: "gameState",
    initialState: "",
    reducers: {
        changeGameState(_, action) {
            return action.payload;
        }
    }
});

const gameStateReducer = gameStateSlice.reducer;
const gameStateActions = gameStateSlice.actions;

export {
    gameStateSlice,
    gameStateReducer,
    gameStateActions
};