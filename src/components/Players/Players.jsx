import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { playersActions } from "../../store/index";
import { StyledPlayer } from "./Player.styles";
import { keysPressed } from '../../App';
import useInterval from '../../hooks/useInterval';
import { consts, validateRotationSpeed } from '../../helpers/index';

const Players = () => {
    const dispatch = useDispatch();
    const playersValues = useSelector(state => state.playersValues);
    
    const updatePlayersValues = () => {
        let updatedValues = [];
        playersValues.forEach(({id, values, keys}, index) => {
            if (index === 0) {

                const newValues = {...values};
                newValues.rotationSpeed = validateRotationSpeed(values, keys);
                newValues.angle += newValues.rotationSpeed;
                console.log(newValues.rotationSpeed)
                updatedValues[index] = {id, values: newValues, keys};
            }
        });

        dispatch(playersActions.updatePlayersValues(updatedValues));
    }

    useInterval(() => {
        updatePlayersValues();
    }, consts.FRAME_INTERVAL);

    return playersValues.map((player, index) => {
        return <StyledPlayer values={player.values} key={index} id={index} />;
    });
};

export default Players;
