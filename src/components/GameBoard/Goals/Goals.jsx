import React from 'react';

const Goal = (props) => {
    return (
        <div
            className='goal'
            style={{
                left: props.position.x,
                top: props.position.y
            }}
        ></div>
    )
}

export default Goal;