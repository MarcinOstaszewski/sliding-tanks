import React from "react";
import { StyledPlayer } from "./Player.styles";
import useInterval from '../../hooks/useInterval';
import { consts, validateRotationSpeed, updateSpeed, updatePosition } from '../../helpers/index';
import { playersData } from "../../store/playersData";

const Players = () => {
    let playersValues = [...playersData];
    const updatePlayersValues = (playersValues) => {
        let updatedValues = [];
        playersValues.forEach(({ id, values, keys }, index) => {
            if (index === 0) {
                const newValues = { ...values };
                newValues.rotationSpeed = validateRotationSpeed(values, keys);
                newValues.angle += newValues.rotationSpeed;
                newValues.speed = updateSpeed(newValues, keys);
                newValues.position = updatePosition(newValues);

                updatedValues[index] = { id, values: { ...newValues }, keys };
            }
            // ??? ew. playersData przesyłać z App jako props i tu uruchamiać update function z App.js
        });
        return updatedValues;
    }

    useInterval(() => {
        console.log(playersValues[0].values.angle);
        playersValues = updatePlayersValues(playersValues);
    }, consts.FRAME_INTERVAL);

    return playersData.map((player, index) => {
        return <StyledPlayer values={player.values} key={index} id={index} />;
    });
};

export default Players;
