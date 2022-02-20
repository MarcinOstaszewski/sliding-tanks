import { createStore } from "redux";
import { playersData } from "./playersData";

const initialState = {
    playersData,
    keysPressed: {},
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "increment":
        //     return { player: state.player++ };
        // case "decrement":
        //     return { player: state.player-- };
        default: return state;
    }
};

const store = createStore(playerReducer);

export default store;