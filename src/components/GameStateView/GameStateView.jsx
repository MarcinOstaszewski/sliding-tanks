import React, { useState } from 'react';
import { playersData } from "../../store/playersData";
import { useSelector, useDispatch } from 'react-redux';
import Welcome from './Welcome';
import Settings from './Settings';
import GameOver from './GameOver';
import GameBoard from '../GameBoard/GameBoard';
import { gameStateSliceActions } from '../../store/index';

const GameStateView = () => {
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);
    const [playersValues, setPlayersValues] = useState([...playersData]);

    let gameStateComponent = null;

    switch (gameState) {
        case 'SETTINGS':
            gameStateComponent = (<Settings />);
            break;
        case 'GAME_ON':
            gameStateComponent = (<GameBoard playersValues={playersValues} setPlayersValues={setPlayersValues} />);
            break;
        case 'GAME_OVER':
            gameStateComponent = (<GameOver />);
            break;
        default:
            gameStateComponent = (<Welcome />);
            break;
    }

    const changeGameState = (type) => {
        dispatch(gameStateSliceActions.changeGameState(type));
    }

    return (
        <div>
            <ul className="top-menu">
                <li onClick={() => changeGameState('WELCOME')}>WELCOME</li>
                <li onClick={() => changeGameState('GAME_ON')}>Start Game</li>
                <li onClick={() => changeGameState('GAME_OVER')}>Game Over</li>
                <li onClick={() => changeGameState('SETTINGS')}>SETTINGS</li>
            </ul>
            {gameStateComponent}
        </div>
    );
}

export default GameStateView;