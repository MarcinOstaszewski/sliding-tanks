import React from 'react';
import { bonusIconsList } from '../../../helpers/bonusHelpers';

const Bonus = (props) => {
    let bonusType = bonusIconsList[props.bonusValues.bonusType];

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