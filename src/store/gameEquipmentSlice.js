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
            action.payload.forEach(eq => {
                switch (eq.type) {
                    case 'mine':
                        state.mines.push(eq.position);
                        if (state.mines.length > 8) {
                            state.mines.shift();
                        }
                        break;
                    default:
                        break;
                }
            })
        }
    }
});

const gameEquipmentReducer = gameEquipmentSlice.reducer;
const gameEquipmentActions = gameEquipmentSlice.actions;

export {
    gameEquipmentReducer,
    gameEquipmentActions
}
