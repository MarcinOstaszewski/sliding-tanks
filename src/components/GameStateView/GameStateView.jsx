import React, { useState } from 'react';
import { playersData, goalData, bonusData, gameStateActions } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { Welcome, Settings, GameOver } from './';
import GameBoard from '../GameBoard/GameBoard';
import { StyledUl } from './GameStateView.Styled';
import { gameStates } from '../../helpers';

const GameStateView = () => {
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);
    const activePlayersList = useSelector(state => state.activePlayers.list);
    const activePlayersPairs = useSelector(state => state.activePlayers.pairs);

    const [playersValues, setPlayersValues] = useState([...playersData]);
    const [goalValues, setGoalValues] = useState({ ...goalData });
    const [bonusValues, setBonusValues] = useState({ ...bonusData });

    let gameStateComponent = null;

    const changeGameState = (type) => {
        dispatch(gameStateActions.changeGameState(type));
    }

    switch (gameState) {
        case gameStates.SETTINGS:
            gameStateComponent = (
                <Settings
                    playersValues={playersValues}
                    setPlayersValues={setPlayersValues}
                />
            );
            break;
        case gameStates.GAME_ON:
            let activePlayersValues = playersValues.map((values, index) => {
                values.active = activePlayersList[index];
                return values;
            });
            gameStateComponent = (
                <GameBoard
                    playersValues={activePlayersValues}
                    setPlayersValues={setPlayersValues}
                    activePlayersPairs={activePlayersPairs}
                    goalValues={goalValues}
                    setGoalValues={setGoalValues}
                    bonusValues={bonusValues}
                    setBonusValues={setBonusValues}
                />
            );
            break;
        case gameStates.GAME_PAUSED:
            gameStateComponent = (<GameOver />);
            break;
        default:
            gameStateComponent = (<Welcome 
                changeGameState = { changeGameState }
            />);
            break;
    }

    return (
        <div>
            {gameStateComponent}
            <StyledUl>
                <li onClick={() => changeGameState(gameStates.WELCOME)}>WELCOME</li>
                <li onClick={() => changeGameState(gameStates.SETTINGS)}>SETTINGS</li>
                <li onClick={() => changeGameState(gameStates.GAME_ON)}>START</li>
                <li onClick={() => changeGameState(gameStates.GAME_PAUSED)}>PAUSE</li>
            </StyledUl>
        </div>
    );
}

export default GameStateView;