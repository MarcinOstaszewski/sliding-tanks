import { createSlice, configureStore } from "@reduxjs/toolkit";
import { playersData } from "./playersData";

const initialState = {
    playersData,
    keysPressed: {},
};

const keysPressedSlice = createSlice({
    name: "keysPressed",
    initialState,
    reducers: {
        addKey(state, action) {
            state.keysPressed[action.payload] = 1;
        },
        delKey(state, action) {
            delete state.keysPressed[action.payload];
        },
    },
});

const store = configureStore({
    reducer: keysPressedSlice.reducer,
});

export const keysActions = keysPressedSlice.actions;

export default store;
