import React from 'react';
import WelcomeStyled from './Welcome.Styled';

export default function Welcome() {
    return (
        <WelcomeStyled>
            <p>Welcome to</p>
            <h1>Sliding Tanks</h1>
            <p>set game properties in <strong>Settings</strong></p><br />
            <p>then you can <strong>Start</strong> and <strong>Pause</strong> the game</p>
        </WelcomeStyled>
    )
}
