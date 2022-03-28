import './GameBoardStyles.scss';
import { useEffect, useState } from 'react';
import Players from './Players/Players';
import Goals from './Goals/Goals';
import Score from './Score/Score';
import useInterval from '../../hooks/useInterval';
import { consts, updatePlayersValues, setKeyListeners, unsetKeyListeners } from '../../helpers';

const keysPressed = {};

const GameBoard = (props) => {
    const [keysListenersReady, setKeysListenersReady] = useState(false);

    useEffect(() => {
        return unsetKeyListeners
    }, []);

    if (!keysListenersReady) {
        setKeyListeners();
        setKeysListenersReady(true);
    };

    useInterval(() => {
        props.setPlayersValues(updatePlayersValues({
            playersValues: props.playersValues,
            goalValues: props.goalValues,
            setGoalValues: props.setGoalValues,
            activePlayersPairs: props.activePlayersPairs
        }));
    }, consts.FRAME_INTERVAL);

    return (
        <div>
            <Score playersValues={props.playersValues} />
            <Goals
                position={props.goalValues.position} />
            <Players
                playersValues={props.playersValues}
                setPlayersValues={props.setPlayersValues}
                activePlayers={props.activePlayers}
                activePlayersPairs={props.activePlayersPairs}
                setGoalValues={props.setGoalValues}
            />
        </div>
    );
}

export default GameBoard;

export { keysPressed };
