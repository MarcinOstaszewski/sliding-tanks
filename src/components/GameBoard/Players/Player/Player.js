import { consts } from '../../../../helpers';

const Player = (props) => {
    const positionStyles = {
        transform: `translate(-${consts.PLAYER_RADIUS}px, -${consts.PLAYER_RADIUS}px)`,
        left: `${props.values.position.x}px`,
        top: `${props.values.position.y}px`
    }
    const playerStyles = {
        backgroundColor: `${props.values.backgroundColor}`,
        transform: `rotate(${props.values.angle}deg)`
    }
    const healthStyles = {
        width: `${props.values.health}%`,
        backgroundColor: `hsl(${props.values.health}deg 50% 50%)`
    }
    return (
        <div className="position" id={props.id} style={positionStyles}>
            <div className="player" style={playerStyles}></div>
            <div className="health" style={healthStyles}></div>
        </div>
    );
}

export default Player;