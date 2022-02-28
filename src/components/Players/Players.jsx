import React from "react";
import { useSelector } from "react-redux";
import { StyledPlayer } from "./Player.styles";

const Players = () => {
    const playersValues = useSelector(state => state.playersValues);

    return playersValues.map((player, index) => {
        return <StyledPlayer values={player.values} key={index} id={index} />;
    });
};

export default Players;
