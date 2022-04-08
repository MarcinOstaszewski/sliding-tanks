import { consts } from '../../../helpers';
import { coloursPalette } from '../../../helpers/stylesCommons';
import { repair } from '../../../assets/svg';

const Workshop = props => {

    return (
        <div className="workshop" style={{
            width: consts.PLAYER_RADIUS * 3,
            height: consts.PLAYER_RADIUS * 3,
            backgroundColor: coloursPalette.primary,
            left: consts.WINDOW_WIDTH / 2,
            top: consts.WINDOW_HEIGHT / 2,
        }}>
            {repair}
        </div>
    )
}

export default Workshop;