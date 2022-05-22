import { consts } from '../../../helpers';
import { repair } from '../../../assets/svg';

const Workshop = props => {
    return (
        <div className="workshop" style={{
            width: consts.PLAYER_RADIUS * consts.WORKSHOP_SCALE,
            height: consts.PLAYER_RADIUS * consts.WORKSHOP_SCALE,
            left: consts.WINDOW_WIDTH / 2,
            top: consts.WINDOW_HEIGHT / 2,
            transform: `translate(-${consts.PLAYER_RADIUS * consts.WORKSHOP_SCALE / 2}px, 
                -${consts.PLAYER_RADIUS * consts.WORKSHOP_SCALE / 2}px)`
        }}>
            {repair}
        </div>
    )
}

export default Workshop;