import React, { useState } from 'react';
import { activePlayersActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';
import StyledSettings from './Settings.Styled.jsx';

export default function Settings(props) {
    const [activeKeysId, setActiveKeysId] = useState(undefined);
    const activePlayers = useSelector(state => state.activePlayers.list);
    const dispatch = useDispatch();

    const togglePlayerActive = (playerId) => {
        const newPlayersList = {
            ...activePlayers,
            [playerId]: !activePlayers[playerId]
        }
        dispatch(activePlayersActions.togglePlayer(newPlayersList));
    }

    const showPlayerKeys = (e) => {
        const id = e.target.dataset.id;
        setActiveKeysId(id)
    }

    const changePlayersKeyBinding = (e) => {
        const id = e.target.closest('.active-keys-display').dataset.id
        const direction = e.target.dataset.direction;
        const newPlayersValues = [...props.playersValues];
        newPlayersValues[id].keys[direction] = e.code;
        // TO DO should check if this key code is not already in use
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
                        style={{ backgroundColor: props.playersValues[id].values.backgroundColor }}>
                    </div>
                </div>
                <div className={"player-keys" + (activeKeysId === id ? " active" : "")}
                    data-id={id}
                    onClick={showPlayerKeys}
                >Show keys</div>
            </li>
        )
    });

    const buildKeyInput = (direction, id) => {
        return (
            <input data-direction={direction}
                type="text"
                className="key-display"
                value={props.playersValues[id].keys[direction]}
                onKeyDown={changePlayersKeyBinding}
                onChange={doNothing} />
        )
    }

    return (
        <StyledSettings>
            <h1>Settings</h1>
            <div className="active-players-selector">
                Choose Active Players:
                <div className="d-flex">
                    <ul>
                        {playersList}
                    </ul>
                    {activeKeysId && (
                        <div className={"active-keys-display"} data-id={activeKeysId}>
                            <div className="d-flex">
                                <div id="player-id" className="player-display">Player {+activeKeysId + 1} keys</div>
                            </div>
                            <div className="d-flex">
                                {buildKeyInput('frwd', activeKeysId)}
                            </div>
                            <div className="d-flex">
                                {buildKeyInput('left', activeKeysId)}
                                {buildKeyInput('back', activeKeysId)}
                                {buildKeyInput('rght', activeKeysId)}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </StyledSettings>
    )
}
