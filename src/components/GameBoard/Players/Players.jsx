import React from 'react';
import Player from './Player/Player';

const Players = (props) => {
    return props.playersValues.map((player, index) => {

        return player ?
            <Player
                values={player.values}
                id={player.id}
                key={index}
            /> : '';
    });
};

export default Players;
