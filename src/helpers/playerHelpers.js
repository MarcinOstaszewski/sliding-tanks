import { validateRotationSpeed, updateSpeed, updatePosition } from './helperFunctions';

const updatePlayersValues = (playersValues) => {
    let updatedValues = [];
    playersValues.forEach(({ id, values, keys }, index) => {
        const newValues = { ...values };
        newValues.rotationSpeed = validateRotationSpeed(newValues, keys);
        newValues.angle += newValues.rotationSpeed;
        newValues.speed = updateSpeed(newValues, keys);
        newValues.position = updatePosition(newValues);

        updatedValues[index] = { id, values: { ...newValues }, keys };
    });
    return updatedValues;
}

export { updatePlayersValues };