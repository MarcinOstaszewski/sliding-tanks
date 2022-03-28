import { consts, validateRotationSpeed, updateSpeed, updatePosition } from './helperFunctions';
import { getRandomGoalPosition, getRandomGoalSpeed } from '../store';

const getDistance = (posA, posB) => {
    return Math.sqrt((posA.x - posB.x) ** 2 + (posA.y - posB.y) ** 2);
}

const getVectorBetween = (p1, p2) => ({
    x: p2.x - p1.x,
    y: p2.y - p1.y
});

const getAngleFromVector = ({ x, y }) => {
    if (x === 0) {
        if (y === 0) return undefined;
        return y < 0 ? 0 : 180; // zwrot jest do góry ekranu dla ujemnego y-greka 
    }
    return Math.atan(y / x) * consts.RAD_TO_DEG + (x > 0 ? 90 : 270);
}

const updatePlayersValues = ({ playersValues, goalValues, setGoalValues, activePlayersPairs }) => {
    let updatedValues = [];

    playersValues.forEach(({ id, values, keys }, index) => {
        if (!id) return;
        const newValues = { ...values };
        newValues.rotationSpeed = validateRotationSpeed(newValues, keys);
        newValues.angle += newValues.rotationSpeed;
        newValues.speed = updateSpeed(newValues, keys);
        newValues.position = updatePosition(newValues);

        const distance = getDistance(newValues.position, goalValues.position);
        if (distance < consts.PLAYER_RADIUS * 2) {
            newValues.points++;
            setGoalValues({
                position: getRandomGoalPosition(),
                speed: getRandomGoalSpeed()
            });
        }

        updatedValues[index] = { id, values: { ...newValues }, keys };
    });

    // activePlayersPairs.forEach(([a, b]) => {
    //     const [pA, pB] = [updatedValues[a], updatedValues[b]];
    //     const [posA, posB] = [pA.values.position, pB.values.position];
    //     const distance = getDistance(posA, posB);
    //     if (distance < consts.PLAYER_RADIUS * 2) {
    //         const vectorBetweenPlayers = getVectorBetween(posA, posB);
    //         const collisionNormalAngle = getAngleFromVector(vectorBetweenPlayers);
    //         console.log(collisionNormalAngle);
    //     }
    // });

    return updatedValues;
}

export { updatePlayersValues };