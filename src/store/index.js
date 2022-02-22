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
            state.keysPressed[action.payload] = true;
        },
        delKey(state, action) {
            state.keysPressed[action.payload] = false;
        },
    },
});

const store = configureStore({
    reducer: keysPressedSlice.reducer,
});

export const keysActions = keysPressedSlice.actions;

export default store;
