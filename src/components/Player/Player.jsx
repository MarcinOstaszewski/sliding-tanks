import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledPlayer } from "./Player.styles";

const Player = () => {
    const dispatch = useDispatch();
    const playersData = useSelector(state => state.playersData);

    const players = playersData.map((player, index) => {
        console.log(player.values, index);
        return <StyledPlayer values={player.values} key={index} id={index} />;
    });

    return players;
};

export default Player;
