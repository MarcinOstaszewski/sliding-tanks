import React, { useState } from 'react';
import { playersData } from "../../store/playersData";
import { useSelector, useDispatch } from 'react-redux';
import Welcome from './Welcome';
import Settings from './Settings';
import { GameOver } from './GameOver';
import GameBoard from '../GameBoard/GameBoard';
import { StyledUl } from './GameStateView.Styled';
import { gameStateSliceActions } from '../../store/index';

const GameStateView = () => {
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);
    const activePlayers = useSelector(state => state.activePlayers);
    const [playersValues, setPlayersValues] = useState([...playersData]);

    let gameStateComponent = null;

    switch (gameState) {
        case 'SETTINGS':
            gameStateComponent = (<Settings />);
            break;
        case 'GAME_ON':
            const activePlayersIndices = Object.keys(activePlayers).filter(i => activePlayers[i]);
            const allPlayersPairs = (arr) => arr.map((v, i) => arr.slice(i + 1).map(w => [v, w])).flat();
            const allPairs = allPlayersPairs(activePlayersIndices);

            const activePlayersValues = playersValues.map(
                (_, index) => activePlayers[index] ? playersValues[index] : ''
            );

            gameStateComponent = (
                <GameBoard
                    playersValues={activePlayersValues}
                    setPlayersValues={setPlayersValues}
                    allPairs={allPairs}
                />
            );
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
            {gameStateComponent}
            <StyledUl>
                <li onClick={() => changeGameState('WELCOME')}>WELCOME</li>
                <li onClick={() => changeGameState('GAME_ON')}>Start Game</li>
                <li onClick={() => changeGameState('GAME_OVER')}>Pause the game</li>
                <li onClick={() => changeGameState('SETTINGS')}>SETTINGS</li>
            </StyledUl>
        </div>
    );
}

export default GameStateView;