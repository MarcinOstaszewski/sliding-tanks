import React from 'react';

const Goal = (props) => {
    return (
        <div
            className='goal'
            style={{
                left: props.goalValues.position.x,
                top: props.goalValues.position.y,
                width: props.goalValues.width + 'px',
                height: props.goalValues.height + 'px'
            }}
        ></div>
    )
}

export default Goal;