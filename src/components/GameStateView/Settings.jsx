import React, { useState } from 'react';
import { activePlayersActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';
import StyledSettings from './Settings.Styled.jsx';
import { playersData } from '../../store/playersData';

export default function Settings() {
    const [activePlayerKeys, setActivePlayerKeys] = useState({});
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
        setActivePlayerKeys(playersData[id].keys);
        setActiveKeysId(id)
    }

    const playersList = Object.keys(activePlayers).map(id => {
        return (
            <li key={id}>
                <div
                    className={'player-button' + (activePlayers[id] ? ' active' : '')}
                    onClick={() => togglePlayerActive(id)}
                >
                    Player {parseInt(id) + 1}
                    <div className="player-colour"
                        style={{ backgroundColor: playersData[id].values.backgroundColor }}>
                    </div>
                </div>
                <div className={"player-keys" + (activeKeysId === id ? " active" : "")}
                    data-id={id}
                    onClick={showPlayerKeys}
                >Show keys</div>
            </li>
        )
    })

    return (
        <StyledSettings>
            <h1>Settings</h1>
            <div className="active-players-selector">
                Choose Active Players:
                <div className="d-flex">
                    <ul>
                        {playersList}
                    </ul>
                    <div className={"active-keys-display" + (Object.keys(activePlayerKeys).length ? "" : " hidden")}>
                        <div className="d-flex">
                            <div id="frwd" className="key-display">{activePlayerKeys.frwd}</div>
                        </div>
                        <div className="d-flex">
                            <div id="left" className="key-display">{activePlayerKeys.left}</div>
                            <div id="back" className="key-display">{activePlayerKeys.back}</div>
                            <div id="rght" className="key-display">{activePlayerKeys.rght}</div>
                        </div>
                    </div>
                </div>

            </div>
        </StyledSettings>
    )
}
