import React from 'react';
import { star } from '../../../assets/svg';

const Goal = (props) => {
    return (
        <div
            className='goal'
            style={{
                left: props.goalValues.position.x,
                top: props.goalValues.position.y,
                // transform: `translate(-${props.goalValues.width / 2}px, -${props.goalValues.height / 2}px)`,
                width: props.goalValues.width + 'px',
                height: props.goalValues.height + 'px'
            }}
        >
            {star}
        </div>
    )
}

export default Goal;