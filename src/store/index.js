import { createSlice, configureStore } from "@reduxjs/toolkit";
import { allActivePlayersPairs } from '../helpers';
import { playersData } from './playersData';
import { goalData } from './goalData';
import { bonusData } from './bonusData';
import { getRandomPosition, getRandomSpeed } from '../helpers/'

const gameStateSlice = createSlice({
    name: "gameState",
    initialState: "",
    reducers: {
        changeGameState(_, action) {
            return action.payload
        }
    }
});

const initialGameSettings = {
    winningScore: 25
}

const gameSettingsSlice = createSlice({
    name: "gameSettings",
    initialState: initialGameSettings,
    reducers: {
        changeGameSettings(_, action) {
            return { winningScore: action.payload };
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
        gameSettings: gameSettingsSlice.reducer,
        gameState: gameStateSlice.reducer
    },
});

export const gameSettingsActions = gameSettingsSlice.actions;
export const activePlayersActions = activePlayersSlice.actions;
export const gameStateSliceActions = gameStateSlice.actions;
export {
    playersData,
    goalData,
    bonusData,
    getRandomPosition,
    getRandomSpeed,
}

export default store;
