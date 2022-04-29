import React from 'react';
import { mine, bullet, missile } from '../../../assets/svg';

const Bonus = (props) => {
    let bonusType = '';

    switch (props.bonusValues.bonusType) {
        case 'bullet':
            bonusType = bullet;
            break;
        case 'missile':
            bonusType = missile;
            break;
        default:
            bonusType = mine;
    }

    return <div
        className="bonus"
        style={{
            left: props.bonusValues.position.x,
            top: props.bonusValues.position.y,
        }}>
        {bonusType}
    </div>
}

export default Bonus;