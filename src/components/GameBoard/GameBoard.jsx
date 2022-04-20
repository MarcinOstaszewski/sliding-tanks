import './GameBoardStyles.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Players from './Players/Players';
import Goals from './Goals/Goals';
import Score from './Score/Score';
import Workshop from './Workshop/Workshop';
import useInterval from '../../hooks/useInterval';
import { consts, updatePlayersValues, setKeyListeners, unsetKeyListeners, getColorFromValue } from '../../helpers';
import Borders from './Borders/Borders';

const keysPressed = {};

const GameBoard = (props) => {
    let gameWon;
    const [keysListenersReady, setKeysListenersReady] = useState(false);
    const gameSettings = useSelector(state => state.gameSettings);

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
            activePlayersPairs: props.activePlayersPairs,
            gameSettings: gameSettings
        }));
    }, consts.FRAME_INTERVAL);

    if (consts.FRAME_INTERVAL === null) {
        gameWon = (
            <div className="game-won">
                <div className="game-won-bg" style={{
                    backgroundColor: getColorFromValue(consts.WINNING_PLAYER.colour)
                }}></div>
                <div className="game-won-titles" style={{
                    color: getColorFromValue(consts.WINNING_PLAYER.colour)
                }}>
                    <strong>The Winner is</strong>
                    <strong>{consts.WINNING_PLAYER.id}</strong>
                    <button className="restart" onClick={() => window.location.href = '/'}>RESTART GAME</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Borders />
            <Score playersValues={props.playersValues} />
            <Goals
                goalValues={props.goalValues} />
            <Players
                playersValues={props.playersValues}
                setPlayersValues={props.setPlayersValues}
                activePlayers={props.activePlayers}
                activePlayersPairs={props.activePlayersPairs}
                setGoalValues={props.setGoalValues}
            />
            <Workshop />
            {gameWon}
        </div>
    );
}

export default GameBoard;

export { keysPressed };
