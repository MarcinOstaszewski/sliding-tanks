import { consts } from './consts';
import { keysPressed } from '../components/GameBoard/GameBoard';
import { addVectors, multiplyVectors } from './vectorHelpers';

const { ROTATION_DELTA, ROTATION_FRICTION, ROTATION_DELTA_MIN, SPEED_DELTA, DEG_TO_RAD,
    PLAYER_RADIUS, WINDOW_HEIGHT, WINDOW_WIDTH, BOUNCE_FACTOR, SPEED_MIN, SPEED_MAX,
    SPEED_FRICTION, ACCELERATION, DECELERATION } = consts;

const validateRotationSpeed = (values, keys) => {
    let rotationSpeed = values.rotationSpeed;
    if (values.health > 0) {
        if (keysPressed[keys.left]) {
            rotationSpeed = values.rotationSpeed - ROTATION_DELTA;
        }
        if (keysPressed[keys.rght]) {
            rotationSpeed = values.rotationSpeed + ROTATION_DELTA;
        }
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

const setNewGameEquipment = (values) => {
    switch (values.equipment) {
        case 'mine':
            const toPlayerCenterVector = {
                x: -consts.PLAYER_RADIUS,
                y: -consts.PLAYER_RADIUS
            };
            const playerCSSPosition = addVectors(values.position, toPlayerCenterVector);
            const playerSpeedVectorMultiplied = multiplyVectors(-5, values.speed);
        
            values.equipmentToAdd = {
                type: values.equipment,
                position: addVectors(playerCSSPosition, playerSpeedVectorMultiplied)
            }
            break;
        case 'repair':
            values.health += 20;
            if (values.health > 100) values.health = 100;
            break;
        default:
            break;
    }
    values.equipment = '';
    return values;
}

export const checkFrwdBackKeysPressed = ({ newValues, keys }) => {
    let newSpeed = { ...newValues.speed };
    if (newValues.health > 0) {
        if (keysPressed[keys.frwd] && !keysPressed[keys.back]) {
            newSpeed = countNewSpeed(newValues, ACCELERATION);
        }
        if (keysPressed[keys.back] && !keysPressed[keys.frwd]) {
            newSpeed = countNewSpeed(newValues, DECELERATION);
        }
        if (keysPressed[keys.back] && keysPressed[keys.frwd] && newValues.equipment) {
            switch(newValues.equipment) {
                case 'mine':
                case 'repair':
                    newValues = setNewGameEquipment(newValues);
                    break;
                default:
            }
        }
    }
 
    [newSpeed, newValues] = verifyWallsBounce(newSpeed, newValues);
    newValues.speed = {
        x: validateSpeed(newSpeed.x),
        y: validateSpeed(newSpeed.y)
    };
    return [newValues.speed, newValues.equipment];
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

const getColorFromValue = (value) => {
    return `hsl(${value}, 100%, 35%)`;
}

const getRandomBetween = (min, max) => Math.random() * (max - min) + min / 2;

const getRandomPosition = (screenPart) => {
    let xMin = consts.PLAYER_RADIUS * 5;
    let xMax = consts.WINDOW_WIDTH - consts.PLAYER_RADIUS * 5;
    let yMin = consts.PLAYER_RADIUS * 5;
    let yMax = consts.WINDOW_HEIGHT - consts.PLAYER_RADIUS * 5;
    if (screenPart) {
        if (screenPart.includes('upper')) yMax /= 2;
        if (screenPart.includes('lower')) yMin *= 2;
        if (screenPart.includes('left')) xMax /= 2;
        if (screenPart.includes('right')) xMin *= 2;
    }
    return {
        x: getRandomBetween(xMin, xMax),
        y: getRandomBetween(yMin, yMax)
    }
}

const getRandomSpeed = (minX, maxX, minY, maxY) => ({
    x: getRandomBetween(minX, maxX),
    y: getRandomBetween(minY, maxY),
})

const setStorageValue = (name, value) => {
    if (window.localStorage) {
        window.localStorage.setItem(name, value);
    }
}

export {
    consts,
    validateRotationSpeed,
    allActivePlayersPairs,
    workshpCoords,
    workshopAffectingDistance,
    getColorFromValue,
    getRandomBetween,
    getRandomPosition,
    getRandomSpeed,
    setStorageValue
}