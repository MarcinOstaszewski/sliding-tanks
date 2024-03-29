import React from 'react';
import WelcomeStyled from './Welcome.Styled';
import { gameStates } from '../../helpers';

export default function Welcome(props) {
    return (
        <WelcomeStyled>
            <p><strong>Welcome to</strong></p>
            <h1 className="main-title"><span>Sliding</span><br /><span>Tanks</span></h1>

            <p>You can check / change game properties in&nbsp;
                <span className='menu-link' onClick={() => props.changeGameState(gameStates.SETTINGS)}>Settings</span>
            </p>
            <p>
                Then you can&nbsp;
                <span className='menu-link' onClick={() => props.changeGameState(gameStates.GAME_ON)}>Start</span> and&nbsp; 
                <span className='menu-link' onClick={() => props.changeGameState(gameStates.GAME_PAUSED)}>Pause</span> the game
            </p>

            <h2>The rules are simple:</h2>
            <ul>
                <li><p>Collect <strong>Stars</strong> for points</p></li>
                <li><p>Star will <strong>get smaller</strong> each time</p></li>
                <li><p><strong>Collisions damage</strong> your tank</p></li>
                <li><p>Visiting <strong>Workshop repairs</strong> your tank slowly</p></li>
                <li><p><strong>Repair is faster</strong> when closer to the center</p></li>
                <li><p>Gather <strong>Equipment</strong> from crates</p></li>
                <li><p>Use it by pressing both <strong>Forward + Back keys</strong></p></li>
            </ul>

        </WelcomeStyled>
    )
}
