import { createSlice } from '@reduxjs/toolkit';

const initialGameEquipment = {
    mines: [],
    missiles: [],
    rockets: []
}

const gameEquipment = createSlice({
    name: "gameEquipment",
    initialState: initialGameEquipment,
    reducers: {
        addNewGameEquipment(state, action) {
            switch (action.gameEquipmentType) {
                case mine:
                    state[action.gameEquipmentType].push(action.gameEquipmentValues)
                    break;
                default:
                    break;
            }
            return action.payload; // ???
        }
    }
});

const gameEquipmentReducer = gameEquipment.reducer;

export { gameEquipmentReducer }

export default gameEquipment;