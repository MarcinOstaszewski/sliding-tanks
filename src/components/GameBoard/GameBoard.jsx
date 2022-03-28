import './GameBoardStyles.scss';
import { useEffect, useState } from 'react';
import Players from './Players/Players';
import Goals from './Goals/Goals'
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
        props.setPlayersValues(updatePlayersValues(props.playersValues, props.activePlayersPairs));
        // props.setGoalValues( ......... );
    }, consts.FRAME_INTERVAL);

    return (
        <div>
            <Players
                playersValues={props.playersValues}
                setPlayersValues={props.setPlayersValues}
                activePlayers={props.activePlayers}
                activePlayersPairs={props.activePlayersPairs}
            />
            <Goals
                position={props.goalValues.position} />
        </div>
    );
}

export default GameBoard;

export { keysPressed };
