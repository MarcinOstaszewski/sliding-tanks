import { consts, getColorFromValue } from '../../../../helpers';

const Player = (props) => {
    const positionStyles = {
        transform: `translate(-${consts.PLAYER_RADIUS}px, -${consts.PLAYER_RADIUS}px)`,
        left: `${props.values.position.x}px`,
        top: `${props.values.position.y}px`
    }
    const playerStyles = {
        backgroundColor: getColorFromValue(props.values.backgroundColor),
        transform: `rotate(${props.values.angle}deg)`
    }
    const healthStyles = {
        width: `${props.values.health}%`,
        backgroundColor: `hsl(${props.values.health} 50% 50%)`
    }
    if (props.values.position.y < consts.PLAYER_RADIUS * 2) {
        healthStyles.top = `${consts.PLAYER_RADIUS * 2.75}px`
    }
    return (
        <div className="position" id={props.id} style={positionStyles}>
            <div className="player" style={playerStyles}></div>
            <div className="health" style={healthStyles}></div>
        </div>
    );
}

export default Player;