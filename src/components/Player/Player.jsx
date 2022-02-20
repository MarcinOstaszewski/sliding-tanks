import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledPlayer } from "./Player.styles";

const Player = () => {
    const dispatch = useDispatch();
    const playersData = useSelector(state => state.playersData);

    return <StyledPlayer playersData={playersData} key={0} id={0} />;
};

export default Player;
