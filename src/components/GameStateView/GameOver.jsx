import React from 'react';
import { StyledGameOver } from './GameOver.Styled';

const GameOver = () => {
    return (
        <StyledGameOver>
            <h1>Game paused</h1>
            <p className="restart">Restart the game</p>
        </StyledGameOver>
    )
}

export { GameOver };
