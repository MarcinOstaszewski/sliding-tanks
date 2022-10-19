import { consts } from '../../../helpers';
import { repair } from '../../../assets/svg';

const Workshop = props => {
    const radiusScaled = consts.PLAYER_RADIUS * consts.WORKSHOP_SCALE;

    return (
        <div className={`workshop ${props.animation ? 'animation' : ''}`} 
            style={{
                width: radiusScaled,
                height: radiusScaled,
                left: consts.WINDOW_WIDTH / 2,
                top: consts.WINDOW_HEIGHT / 2,
                transform: `translate(-${radiusScaled / 2}px, 
                    -${radiusScaled / 2}px)`
            }}
        >
            {repair}
        </div>
    )
}

export default Workshop;