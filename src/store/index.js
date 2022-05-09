import { createSlice, configureStore } from "@reduxjs/toolkit";
import { playersData } from './playersData';
import { goalData } from './goalData';
import { bonusData, resetBonusValues } from './bonusData';
import { getRandomPosition, getRandomSpeed } from '../helpers/'
import { gameStateActions, gameStateReducer } from './gameStateSlice';
import { gameSettingsActions, gameSettingsReducer } from './gameSettingsSlice';
import { activePlayersActions, activePlayersReducer } from './activePlayersSlice';

const store = configureStore({
    reducer: {
        activePlayers: activePlayersReducer,
        gameSettings: gameSettingsReducer,
        gameState: gameStateReducer
    },
});

export {
    playersData,
    goalData,
    bonusData,
    resetBonusValues,
    getRandomPosition,
    getRandomSpeed,
    gameSettingsActions,
    gameStateActions,
    activePlayersActions
}

export default store;
