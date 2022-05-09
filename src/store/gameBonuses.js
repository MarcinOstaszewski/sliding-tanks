import { createSlice } from '@reduxjs/toolkit';

const initialGameBonuses = {
    mines: [],
    missiles: [],
    rockets: []
}

const gameBonuses = createSlice({
    name: "gameBonuses",
    initialState: initialGameBonuses,
    reducers: {
        pushNewGameBonus(_, action) {
            return action.payload; // ???
        }
    }
});

const gameBonusesReducer = gameBonuses.reducer;

export { gameBonusesReducer }

export default gameBonuses;