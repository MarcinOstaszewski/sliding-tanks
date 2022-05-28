import { consts, getColorFromValue } from '../../../../helpers';
import { bonusIconsList } from '../../../../helpers/bonusHelpers';
import { skull } from '../../../../assets/svg';

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

    let player;
    if (props.values.health > 0) {
        const bonusType = bonusIconsList[props.values.equipment];
        const isRepaired = props.values.isRepaired ? ' is-repaired' : '';

        const healthStyles = {
            width: `${props.values.health}%`,
            backgroundColor: `hsl(${props.values.health} 50% 50%)`
        }
        if (props.values.position.y < consts.PLAYER_RADIUS * 2) {
            healthStyles.top = `${consts.PLAYER_RADIUS * 2.75}px`
        }
        player = <>
            <div className="player" style={playerStyles}></div>
            <div className={`health${isRepaired}`} style={healthStyles}></div>
            <div className="bonus-type">
                {bonusType}
            </div>
        </>
    } else {
        player = (
            <svg
                className="skull"
                width={consts.PLAYER_RADIUS * 2 + 'px'}
                height={consts.PLAYER_RADIUS * 2 + 'px'}
                viewBox="0 0 32 32"
                fill={getColorFromValue(props.values.backgroundColor)}
            >
                {skull}
            </svg>
        )
    }

    return (
        <div className="position" id={props.id} style={positionStyles}>
            {player}
        </div>
    );
}

export default Player;