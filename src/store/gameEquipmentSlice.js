import { createSlice } from '@reduxjs/toolkit';

const initialGameEquipment = {
    mines: [],
    missiles: [],
    rockets: []
}

const gameEquipmentSlice = createSlice({
    name: "gameEquipment",
    initialState: initialGameEquipment,
    reducers: {
        addNewGameEquipment(state, action) {
            switch (action.gameEquipmentType) {
                case 'mine':
                    state[action.gameEquipmentType].push(action.gameEquipmentValues);
                    break;
                default:
                    break;
            }
            return action.payload; // ???
        }
    }
});

const gameEquipmentReducer = gameEquipmentSlice.reducer;
const gameEquipmentActions = gameEquipmentSlice.actions;

export {
    gameEquipmentReducer,
    gameEquipmentActions
}
