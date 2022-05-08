import React, { useState } from 'react';
import { activePlayersActions, gameSettingsActions } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import StyledSettings from './Settings.Styled.jsx';
import { getColorFromValue, setStorageValue } from '../../helpers';

export default function Settings(props) {
    const [activeKeysId, setActiveKeysId] = useState(undefined);
    const activePlayers = useSelector(state => state.activePlayers.list);
    const gameSettings = useSelector(state => state.gameSettings);
    const dispatch = useDispatch();

    const togglePlayerActive = (playerId) => {
        const newPlayersList = {
            ...activePlayers,
            [playerId]: !activePlayers[playerId]
        }
        setStorageValue('initialPlayersList', JSON.stringify(newPlayersList))
        dispatch(activePlayersActions.togglePlayer(newPlayersList));
    }

    const showPlayerKeys = e => {
        const id = e.target.dataset.id;
        setActiveKeysId(id)
    }

    const getPlayerId = e => {
        return e.target.closest('.active-keys-display').dataset.id;
    }

    const changePlayersKeyBinding = e => {
        const direction = e.target.dataset.direction;
        const newPlayersValues = [...props.playersValues];
        newPlayersValues[getPlayerId(e)].keys[direction] = e.code;
        // TO DO should check if this key code is not already in use
        props.setPlayersValues(newPlayersValues);
    }

    const updateColourValue = e => {
        const newPlayersValues = [...props.playersValues];
        newPlayersValues[getPlayerId(e)].values.backgroundColor = e.target.value;
        props.setPlayersValues(newPlayersValues);
    }

    const doNothing = () => null;

    const playersList = Object.keys(activePlayers).map(id => {
        return (
            <li key={id}>
                <div
                    className={'player-button' + (activePlayers[id] ? ' active' : '')}
                    onClick={() => togglePlayerActive(id)}
                >
                    Player {parseInt(id) + 1}
                    <div className="player-colour"
                        style={{ backgroundColor: getColorFromValue(props.playersValues[id].backgroundColor) }}>
                    </div>
                </div>
                <div className={"player-keys" + (activeKeysId === id ? " active" : "")}
                    data-id={id}
                    onClick={showPlayerKeys}
                >Change</div>
            </li>
        )
    });

    const buildKeyInput = (direction, id) => {
        return (
            <input data-direction={direction}
                type="text"
                className="value-display"
                value={props.playersValues[id].keys[direction]}
                onKeyDown={changePlayersKeyBinding}
                onChange={doNothing} />
        )
    }

    const changeWinningScore = (e) => {
        setStorageValue('winningScore', e.target.value);
        dispatch(gameSettingsActions.changeGameSettings(e.target.value));
    }

    return (
        <StyledSettings>
            <h1>Settings</h1>
            <div className="settings-container active-players-selector">
                <h2>Active Players</h2>
                <div className="d-flex">
                    <ul>
                        {playersList}
                    </ul>
                    {activeKeysId && (
                        <div className={"active-keys-display"} data-id={activeKeysId}>
                            <div className="player-display w-100">
                                <strong>Player {+activeKeysId + 1}</strong>
                            </div>
                            <div className="player-display-title">Key bindings:</div>
                            <div className="d-flex">
                                {buildKeyInput('frwd', activeKeysId)}
                            </div>
                            <div className="d-flex">
                                {buildKeyInput('left', activeKeysId)}
                                {buildKeyInput('back', activeKeysId)}
                                {buildKeyInput('rght', activeKeysId)}
                            </div>
                            <div className="player-display">
                                <div className="player-display-title">Tank colour:</div>
                            </div>
                            <input
                                min="0"
                                max="360"
                                value={props.playersValues[activeKeysId].values.backgroundColor}
                                type="range"
                                onChange={updateColourValue}
                                className="colour-range-input" />
                        </div>
                    )}
                </div>
            </div>
            <div className="settings-container game-settings">
                <h2>Game settings values</h2>
                <div className="game-values-list d-flex">
                    Winning score:
                    <input
                        type="number" min="1" max="999"
                        className="value-display winning-score"
                        value={gameSettings.winningScore} onChange={changeWinningScore} />
                </div>
            </div>
        </StyledSettings>
    )
}
