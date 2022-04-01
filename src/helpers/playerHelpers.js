import { consts, validateRotationSpeed, updateSpeed, updatePosition } from './helperFunctions';
import { getRandomGoalPosition, getRandomGoalSpeed } from '../store';

const getDistance = (posA, posB) => {
    return Math.sqrt((posA.x - posB.x) ** 2 + (posA.y - posB.y) ** 2);
}

const getNormalVector = (p1, p2) => ({
    x: p2.x - p1.x,
    y: p2.y - p1.y
});
const getVectorMagnitude = vector => Math.sqrt(vector.x ** 2 + vector.y ** 2);
const getUnitNormalVector = (vector) => {
    console.log('vector:', vector);
    const vectorMagnitude = getVectorMagnitude(vector) / consts.SPEED_FACTOR_AFTER_COLLISION;
    console.log('vectorMagnitude: ', vectorMagnitude);
    return {
        x: vector.x / vectorMagnitude,
        y: vector.y / vectorMagnitude
    }
};
const getUnitTangentVector = (vector) => ({
    x: - vector.y,
    y: vector.x
});
const multiplyVector = (unit, vector) => ({
    x: vector.x * unit,
    y: vector.y * unit
});
const addVectors = (vectorA, vectorB) => ({
    x: vectorA.x + vectorB.x,
    y: vectorA.y + vectorB.y
});
const dotProduct = (v1, v2) => v1.x * v2.y + v1.y * v2.y;

const correctPositionIfOutOfScreen = (posA, posB) => {
    if (posA.x < 0 || posB.x < 0) {
        let correction = Math.min(posA.x, posB.x);
        posA.x -= correction;
        posB.x -= correction;
    } else if (posA.x > consts.WINDOW_WIDTH || posB.x > consts.WINDOW_WIDTH) {
        let correction = Math.max(posA.x - consts.WINDOW_WIDTH, posB.x - consts.WINDOW_WIDTH);
        posA.x -= correction;
        posB.x -= correction;
    }

    if (posA.y < 0 || posB.y < 0) {
        let correction = Math.min(posA.y, posB.y);
        posA.y -= correction;
        posB.y -= correction;
    } else if (posA.y > consts.WINDOW_WIDTH || posB.y > consts.WINDOW_WIDTH) {
        let correction = Math.max(posA.y - consts.WINDOW_WIDTH, posB.y - consts.WINDOW_WIDTH);
        posA.y -= correction;
        posB.y -= correction;
    }

    return [posA, posB];
}

const eliminateCollisionDepth = (posA, posB, normalVector, collisionDepth) => {
    let newPosA = {
        x: posA.x - normalVector.x / consts.PLAYER_RADIUS * collisionDepth,
        y: posA.y - normalVector.y / consts.PLAYER_RADIUS * collisionDepth
    }
    let newPosB = {
        x: posB.x - normalVector.x / consts.PLAYER_RADIUS * -collisionDepth,
        y: posB.y - normalVector.y / consts.PLAYER_RADIUS * -collisionDepth
    }
    return correctPositionIfOutOfScreen(newPosA, newPosB);
};

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

    activePlayersPairs.forEach(([a, b]) => {
        const [pA, pB] = [updatedValues[a], updatedValues[b]];
        const [posA, posB] = [pA.values.position, pB.values.position];
        const [speedA, speedB] = [pA.values.speed, pB.values.speed];
        const distance = getDistance(posA, posB);
        if (distance < consts.PLAYER_RADIUS * 2) {

            let normalVector = getNormalVector(posA, posB);
            const collisionDepth = consts.PLAYER_RADIUS * 2 - distance;
            [updatedValues[a].values.position, updatedValues[b].values.position] =
                eliminateCollisionDepth(posA, posB, normalVector, collisionDepth);
            // eliminateCollisionDepth(posA, normalVector, collisionDepth);
            normalVector = getNormalVector(updatedValues[a].values.position, updatedValues[b].values.position);

            // 1. from: https://imada.sdu.dk/~rolf/Edu/DM815/E10/2dcollisions.pdf
            const unitNormalVector = getUnitNormalVector(normalVector);
            const unitTangentVector = getUnitTangentVector(unitNormalVector);
            console.log('unitNormalVector: ', unitNormalVector);
            console.log('unitTangentVector', unitTangentVector);
            // 3.
            const speedNormalA = dotProduct(unitNormalVector, speedA);
            const speedTangentA = dotProduct(unitTangentVector, speedA);
            const speedNormalB = dotProduct(unitNormalVector, speedB);
            const speedTangentB = dotProduct(unitTangentVector, speedB);
            // 4.
            const resultSpeedTangentA = speedTangentA;
            const resultSpeedTangentB = speedTangentB;
            // 5.
            const resultSpeedNormalA = speedNormalB; // as both Players have the same mass
            const resultSpeedNormalB = speedNormalA;
            // 6.
            const resultSpeedNormalVectorA = multiplyVector(resultSpeedNormalA, unitNormalVector);
            const resultSpeedTangentVectorA = multiplyVector(resultSpeedTangentA, unitTangentVector);
            const resultSpeedNormalVectorB = multiplyVector(resultSpeedNormalB, unitNormalVector);
            const resultSpeedTangentVectorB = multiplyVector(resultSpeedTangentB, unitTangentVector);
            // 7.
            const resultSpeedA = addVectors(resultSpeedNormalVectorA, resultSpeedTangentVectorA);
            const resultSpeedB = addVectors(resultSpeedNormalVectorB, resultSpeedTangentVectorB);

            updatedValues[a].values.speed = resultSpeedA;
            updatedValues[b].values.speed = resultSpeedB;
            console.log('after - A:', speedA, resultSpeedA, '__B: ', speedB, resultSpeedB);
            console.log('___________')
        }
    });

    return updatedValues;
}

export { updatePlayersValues };