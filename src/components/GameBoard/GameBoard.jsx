import '../Player/Player.scss';
import { useEffect, useState } from 'react';
import Players from '../Players/Players';
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
    }, consts.FRAME_INTERVAL);

    return (
        <div>
            <Players
                playersValues={props.playersValues}
                setPlayersValues={props.setPlayersValues}
                activePlayers={props.activePlayers}
                activePlayersPairs={props.activePlayersPairs}
            />
            <div className="goal"></div>
        </div>
    );
}

export default GameBoard;

export { keysPressed };
