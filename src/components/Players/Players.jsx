import React from "react";
import { useSelector } from "react-redux";
import { StyledPlayer } from "./Player.styles";

const Players = () => {
    const playersData = useSelector(state => state.playersData);

    return playersData.map((player, index) => {
        return <StyledPlayer values={player.values} key={index} id={index} />;
    });
};

export default Players;
