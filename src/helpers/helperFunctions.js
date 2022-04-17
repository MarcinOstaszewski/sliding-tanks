import { consts } from './consts';
import { keysPressed } from '../components/GameBoard/GameBoard';

const { ROTATION_DELTA, ROTATION_FRICTION, ROTATION_DELTA_MIN, SPEED_DELTA, DEG_TO_RAD,
    PLAYER_RADIUS, WINDOW_HEIGHT, WINDOW_WIDTH, BOUNCE_FACTOR, SPEED_MIN, SPEED_MAX,
    SPEED_FRICTION, ACCELERATION, DECELERATION } = consts;

const validateRotationSpeed = (values, keys) => {
    let rotationSpeed = values.rotationSpeed;
    if (keysPressed[keys.left]) {
        rotationSpeed = values.rotationSpeed - ROTATION_DELTA;
    }
    if (keysPressed[keys.rght]) {
        rotationSpeed = values.rotationSpeed + ROTATION_DELTA;
    }
    rotationSpeed *= ROTATION_FRICTION;
    if (Math.abs(rotationSpeed) < ROTATION_DELTA_MIN) {
        rotationSpeed = 0;
    }
    return rotationSpeed;
}

const xFraction = (angle) => SPEED_DELTA * Math.sin(angle * DEG_TO_RAD);
const yFraction = (angle) => SPEED_DELTA * Math.cos(angle * DEG_TO_RAD);

const countNewSpeed = ({ angle, speed }, frwd) => {
    let { x, y } = speed;
    return {
        x: x - (xFraction(angle) * frwd),
        y: y + (yFraction(angle) * frwd)
    };
}

export const updateSpeed = (values, keys) => {
    let newSpeed = { ...values.speed };
    if (keysPressed[keys.frwd] && !keysPressed[keys.back]) {
        newSpeed = countNewSpeed(values, ACCELERATION);
    }
    if (keysPressed[keys.back] && !keysPressed[keys.frwd]) {
        newSpeed = countNewSpeed(values, DECELERATION);
    }
    [newSpeed, values] = verifyWallsBounce(newSpeed, values);
    newSpeed = {
        x: validateSpeed(newSpeed.x),
        y: validateSpeed(newSpeed.y)
    };
    return newSpeed;
}

const validateSpeed = speed => {
    if (Math.abs(speed) < SPEED_MIN) { return 0; }
    if (speed > SPEED_MAX) { return SPEED_MAX; }
    if (speed < -SPEED_MAX) { return -SPEED_MAX; }
    return speed * SPEED_FRICTION;
}

const verifyWallsBounce = (newSpeed, vals) => {
    if (vals.position.x + newSpeed.x < PLAYER_RADIUS
        || vals.position.x + newSpeed.x > WINDOW_WIDTH - 2 * PLAYER_RADIUS) {
        vals.health -= Math.abs(newSpeed.x);

        newSpeed.x *= BOUNCE_FACTOR;
    }
    if (vals.position.y + newSpeed.y < PLAYER_RADIUS
        || vals.position.y + newSpeed.y > WINDOW_HEIGHT - 3 * PLAYER_RADIUS) {
        vals.health -= Math.abs(newSpeed.y);
        newSpeed.y *= BOUNCE_FACTOR;
    }
    return [
        {
            x: newSpeed.x,
            y: newSpeed.y
        },
        vals
    ];
}

export const updatePosition = ({ position, speed }) => {
    let pos = {
        x: position.x + speed.x,
        y: position.y + speed.y
    };

    return pos
}

const onKeyDown = e => {
    keysPressed[e.code] = 1;
}
const onKeyUp = e => {
    delete keysPressed[e.code];
}
export const setKeyListeners = () => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
}

export const unsetKeyListeners = () => {
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);
}

const allActivePlayersPairs = (playersList) => {
    const arr = Object.keys(playersList).filter(i => playersList[i])
    return arr.map((v, i) => arr.slice(i + 1).map(w => [v, w])).flat()
};

const workshpCoords = {
    x: consts.WINDOW_WIDTH / 2,
    y: consts.WINDOW_HEIGHT / 2
}

const workshopAffectingDistance = consts.PLAYER_RADIUS * (consts.WORKSHOP_SCALE / 2 + 1);

export {
    consts,
    validateRotationSpeed,
    allActivePlayersPairs,
    workshpCoords,
    workshopAffectingDistance
}