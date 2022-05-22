import { createSlice } from '@reduxjs/toolkit';

let winningScoreFromStorage;
if (window.localStorage) {
    winningScoreFromStorage = window.localStorage.getItem('winningScore');
}

const initialGameSettings = {
    winningScore: winningScoreFromStorage || 25
}

const gameSettingsSlice = createSlice({
    name: "gameSettings",
    initialState: initialGameSettings,
    reducers: {
        changeGameSettings(_, action) {
            return { winningScore: action.payload };
        }
    }
});

const gameSettingsActions = gameSettingsSlice.actions;
const gameSettingsReducer = gameSettingsSlice.reducer;

export {
    gameSettingsReducer,
    gameSettingsActions
}