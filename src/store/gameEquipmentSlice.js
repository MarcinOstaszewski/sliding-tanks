import { createSlice } from '@reduxjs/toolkit';

const initialGameEquipment = {
    mines: [],
    // missiles: [],
    // rockets: []
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
        },
        removeMinesFromBoard(state, action) {
            action.payload
                .map(i => parseInt(i))
                .sort((a, b) => b - a)
                .forEach(i => {
                    state.mines.splice(i, 1);
                });
            return state;
        }
    }
});

const gameEquipmentReducer = gameEquipmentSlice.reducer;
const gameEquipmentActions = gameEquipmentSlice.actions;

export {
    gameEquipmentReducer,
    gameEquipmentActions
}
