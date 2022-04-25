import React from 'react';
import { mine } from '../../../assets/svg';

const Bonus = (props) => {

    return <div
        className="bonus"
        style={{
            left: props.bonusValues.position.x,
            top: props.bonusValues.position.y,
        }}>
        {mine}
    </div>
}

export default Bonus;