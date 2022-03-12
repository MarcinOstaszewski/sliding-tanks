import consts from './consts';
import { keysPressed } from '../App';

const { ROTATION_DELTA, ROTATION_FRICTION, ROTATION_DELTA_MIN, SPEED_DELTA, DEG_TO_RAD,
    PLAYER_RADIUS, WINDOW_HEIGHT, WINDOW_WIDTH, BOUNCE_FACTOR, SPEED_MIN, SPEED_MAX, SPEED_FRICTION } = consts;

export const validateRotationSpeed = (values, keys) => {
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
        x: x + (xFraction(angle) * x * frwd),
        y: y + (yFraction(angle) * y * frwd)
    };
}

export const updateSpeed = (values, keys) => {
    let newSpeed = { ...values.speed };
    if (keysPressed[keys.frwd] && !keysPressed[keys.back]) {
        newSpeed = countNewSpeed(values, 1);
    }
    if (keysPressed[keys.back] && !keysPressed[keys.frwd]) {
        newSpeed = countNewSpeed(values, -1);
    }

    newSpeed = verifyWallsBounce(values);
    newSpeed = {
        x: validateSpeed(newSpeed.x),
        y: validateSpeed(newSpeed.y)
    };
    return newSpeed;
}

const validateSpeed = (speed) => {
    if (Math.abs(speed) < SPEED_MIN) { return 0; }
    if (speed > SPEED_MAX) { return SPEED_MAX; }
    if (speed < -SPEED_MAX) { return -SPEED_MAX; }
    return speed * SPEED_FRICTION;
}

const verifyWallsBounce = vals => {
    if (vals.position.x + vals.speed.x < PLAYER_RADIUS
        || vals.position.x + vals.speed.x > WINDOW_WIDTH - PLAYER_RADIUS) {
        vals.speed.x *= BOUNCE_FACTOR;
    }
    if (vals.position.y + vals.speed.y < PLAYER_RADIUS
        || vals.position.y + vals.speed.y > WINDOW_HEIGHT - PLAYER_RADIUS) {
        vals.speed.y *= BOUNCE_FACTOR;
    }
    return {
        x: vals.speed.x,
        y: vals.speed.y
    };
}

export const updatePosition = ({ position, speed }) => {
    return {
        x: position.x + speed.x,
        y: position.y + speed.y
    };
}