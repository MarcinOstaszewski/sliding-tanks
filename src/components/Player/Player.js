import './Player.scss';
import { consts } from '../../helpers';

const Player = (props) => {
    let styles = {
        transform: `translate(-${consts.PLAYER_RADIUS}px, -${consts.PLAYER_RADIUS}px)
                    rotate(${props.values.angle}deg)`,
        left: `${props.values.position.x}px`,
        top: `${props.values.position.y}px`,

    }
    return (
        <div className="player" id={props.id} style={styles}></div>
    );
}

export default Player;