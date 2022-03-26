import React from 'react';
import { activePlayersActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';
import StyledSettings from './Settings.Styled.jsx'

export default function Settings() {
    const activePlayers = useSelector(state => state.activePlayers);
    const dispatch = useDispatch();

    const togglePlayerActive = (playerId) => {
        dispatch(activePlayersActions.togglePlayer(playerId));
    }

    const playersList = Object.keys(activePlayers).map(id => {
        return (
            <li key={id}
                className={activePlayers[id] ? 'active' : ''}
                onClick={() => togglePlayerActive(id)}
            >Player {id}</li>
        )
    })

    return (
        <StyledSettings>
            <h1>Settings</h1>
            <div className='active-players-selector'>
                Choose Active Players:
                <ul>
                    {playersList}
                </ul>
            </div>
        </StyledSettings>
    )
}
