import React from 'react';
import WelcomeStyled from './Welcome.Styled';

export default function Welcome() {
    return (
        <WelcomeStyled>
            <p>Welcome to</p>
            <h1>Sliding Tanks</h1>
            <p>set game properties in <strong>Settings</strong></p>
            <p>then you can <strong>Start</strong> and <strong>Pause</strong> the game</p>

            <h2>The rules are simple:</h2>
            <ul>
                <li><p>Collect <strong>Stars</strong> for points</p></li>
                <li><p>Stars will <strong>get smaller</strong> each time</p></li>
                <li><p><strong>Collisions damage</strong> your tank</p></li>
                <li><p>Visiting <strong>Workshop repairs</strong> your tank slowly</p></li>
                <li><p><strong>Repair is faster</strong> when closer to the center</p></li>
            </ul>

        </WelcomeStyled>
    )
}
