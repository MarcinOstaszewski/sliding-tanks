import React, { useState } from 'react';
import { playersData, goalData, gameStateSliceActions } from '../../store'
import { useSelector, useDispatch } from 'react-redux';
import { Welcome, Settings, GameOver } from './';
import GameBoard from '../GameBoard/GameBoard';
import { StyledUl } from './GameStateView.Styled';

const GameStateView = () => {
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);
    const activePlayersList = useSelector(state => state.activePlayers.list);
    const activePlayersPairs = useSelector(state => state.activePlayers.pairs);

    const [playersValues, setPlayersValues] = useState([...playersData]);
    const [goalValues, setGoalValues] = useState({ ...goalData });

    let gameStateComponent = null;

    switch (gameState) {
        case 'SETTINGS':
            gameStateComponent = (
                <Settings
                    playersValues={playersValues}
                    setPlayersValues={setPlayersValues}
                />
            );
            break;
        case 'GAME_ON':
            const activePlayersValues = playersValues.map(
                (_, index) => activePlayersList[index] ? playersValues[index] : ''
            );
            gameStateComponent = (
                <GameBoard
                    playersValues={activePlayersValues}
                    setPlayersValues={setPlayersValues}
                    activePlayersPairs={activePlayersPairs}
                    goalValues={goalValues}
                    setGoalValues={setGoalValues}
                />
            );
            break;
        case 'GAME_PAUSED':
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
                <li onClick={() => changeGameState('SETTINGS')}>SETTINGS</li>
                <li onClick={() => changeGameState('GAME_ON')}>START</li>
                <li onClick={() => changeGameState('GAME_PAUSED')}>PAUSE</li>
            </StyledUl>
        </div>
    );
}

export default GameStateView;