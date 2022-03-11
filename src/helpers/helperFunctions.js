import consts from './consts';
import { keysPressed } from '../App';


export const validateRotationSpeed = (values, keys) => {
    let rotationSpeed = values.rotationSpeed;
    if (keysPressed[keys.left]) {
        rotationSpeed = values.rotationSpeed - consts.ROTATION_DELTA;
    }
    if (keysPressed[keys.rght]) {
        rotationSpeed = values.rotationSpeed + consts.ROTATION_DELTA;
    }
    rotationSpeed *= consts.ROTATION_FRICTION;
    if (Math.abs(rotationSpeed) < consts.ROTATION_DELTA_MIN) {
        rotationSpeed = 0;
    }
    return rotationSpeed;
}