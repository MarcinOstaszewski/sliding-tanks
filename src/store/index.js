import { configureStore } from "@reduxjs/toolkit";
import { playersData } from './playersData';
import { goalData } from './goalData';
import { bonusData, resetBonusValues } from './bonusData';
import { getRandomPosition, getRandomSpeed } from '../helpers/'
import { gameStateActions, gameStateReducer } from './gameStateSlice';
import { gameSettingsActions, gameSettingsReducer } from './gameSettingsSlice';
import { activePlayersActions, activePlayersReducer } from './activePlayersSlice';
import { gameEquipmentActions, gameEquipmentReducer } from './gameEquipment';

const store = configureStore({
    reducer: {
        activePlayers: activePlayersReducer,
        gameSettings: gameSettingsReducer,
        gameState: gameStateReducer,
        gameEquipment: gameEquipmentReducer
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
    activePlayersActions,
    gameEquipmentActions
}

export default store;
