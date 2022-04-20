import React from 'react';
import { StyledGameOver } from './GameOver.Styled';

const GameOver = () => {
    return (
        <StyledGameOver>
            <h1>Game paused</h1>
            <p className="restart" onClick={() => window.location.href = '/'}>
                Restart the game
            </p>
        </StyledGameOver>
    )
}

export default GameOver;
