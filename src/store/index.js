import { createSlice, configureStore } from "@reduxjs/toolkit";
import { playersData } from "./playersData";

const playersValuesSlice = createSlice({
    name: "playersValues",
    initialState: playersData,
    reducers: {
        updatePlayersValues(state, action) {
            return state = action.payload
        },
    },
});

const store = configureStore({
    reducer: {
        playersValues: playersValuesSlice.reducer
    },
});

export const playersActions = playersValuesSlice.actions;

export default store;
