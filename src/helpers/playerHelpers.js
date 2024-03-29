import {
    consts,
    validateRotationSpeed,
    checkFrwdBackKeysPressed,
    updatePosition,
    workshpCoords,
    workshopAffectingDistance
} from './helperFunctions';
import { getRandomPosition, getRandomSpeed } from './index';
import {
    getVectorMagnitude,
    getDistance,
    getNormalVector,
    getUnitNormalVector,
    getUnitTangentVector,
    multiplyVectors,
    addVectors,
    dotProduct
} from './vectorHelpers';
import { resetBonusValues } from '../store';

const correctPositionIfOutOfScreen = (posA, posB) => {
    const radius = consts.PLAYER_RADIUS;
    const maxXCoord = consts.WINDOW_WIDTH - radius;
    const maxYCoord = consts.WINDOW_HEIGHT - radius;
    if (posA.x < radius || posB.x < radius) {
        let correction = Math.abs(Math.max(radius - posA.x, radius - posB.x));
        posA.x += correction;
        posB.x += correction;
    } else if (posA.x > maxXCoord || posB.x > maxXCoord) {
        let correction = Math.max(posA.x - maxXCoord, posB.x - maxXCoord);
        posA.x -= correction;
        posB.x -= correction;
    }

    if (posA.y < radius || posB.y < radius) {
        let correction = Math.abs(Math.max(radius - posA.y, radius - posB.y));
        posA.y += correction;
        posB.y += correction;
    } else if (posA.y > maxYCoord || posB.y > maxYCoord) {
        let correction = Math.max(posA.y - maxYCoord, posB.y - maxYCoord);
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

const updatePlayersHealth = (vals) => {
    const distanceToWorkshop = getDistance(vals.position, workshpCoords);
    vals.isRepaired = false;
    if (distanceToWorkshop <= workshopAffectingDistance) {
        vals.health += 1 - distanceToWorkshop / workshopAffectingDistance;
        if (vals.health > 100) {
            vals.health = 100
        } else {
            vals.isRepaired = true;
        }
    }
    return [vals.health, vals.isRepaired];
}

const checkIfGoalCaught = ({ newValues, goalValues, setGoalValues, gameSettings, id }) => {
    const goalDistance = getDistance(newValues.position, goalValues.position);
    if (goalDistance < consts.PLAYER_RADIUS + (goalValues.width / 2)) {

        newValues.points += goalValues.prize;

        if (newValues.points >= gameSettings.winningScore) {
            consts.FRAME_INTERVAL = null;
            consts.WINNING_PLAYER = {
                id,
                colour: newValues.backgroundColor
            }
        } else {
            setGoalValues({
                position: getRandomPosition(),
                speed: getRandomSpeed(-3, 3, -3, 3),
                width: goalValues.width > 4 ? goalValues.width - consts.PLAYER_RADIUS / 10 : goalValues.width,
                height: goalValues.height > 4 ? goalValues.width - consts.PLAYER_RADIUS / 10 : goalValues.height,
                prize: 1,
            });
        }
    }
    return newValues.points;
}

const checkIfBonusCaught = ({ newValues, bonusValues, setBonusValues }) => {
    const bonusDistance = getDistance(newValues.position, bonusValues.position);
    if (bonusDistance < 30) {
        setBonusValues(resetBonusValues());
        return bonusValues.bonusType;
    }
    return newValues.equipment;
}

const checkCollisions = (values, objects, toRemove) => {
    let health = values.health;
    objects.forEach((obj, index) => {
        const objectPosition = obj.id ? obj.position : obj;
        const distance = getDistance(values.position, objectPosition);
        if (distance < consts.PLAYER_RADIUS * 2) {
            if (obj.id) {
                if (obj.id !== values.id) {
                    health -= consts.BULLET_HIT_DAMAGE;
                    toRemove.push(obj);                 
                }
            } else {
                health -= consts.MINE_COLLISION_DAMAGE;
                toRemove[index] = obj;
            }
        }
    })
    return [health, toRemove];
}

const updatePlayersValues = ({
    playersValues,
    goalValues,
    setGoalValues,
    bonusValues,
    setBonusValues,
    activePlayersPairs,
    gameSettings,
    onBoardEquipment,
    minesToRemove,
    bulletsOnGameBoard,
    bulletsToRemove
}) => {
    const updatedValues = [];

    playersValues.forEach(({ id, active, values, keys }, index) => {
        if (!active) {
            updatedValues[index] = { id, active, values, keys };
        } else {
            const newValues = { ...values };
            newValues.rotationSpeed = validateRotationSpeed(newValues, keys);
            newValues.angle += newValues.rotationSpeed;
            [newValues.speed, newValues.equipment] = checkFrwdBackKeysPressed({ newValues, keys });
            newValues.position = updatePosition(newValues);
            [newValues.health, newValues.isRepaired] = updatePlayersHealth(newValues);
            newValues.points = checkIfGoalCaught({ newValues, goalValues, setGoalValues, gameSettings, id });
            newValues.equipment = checkIfBonusCaught({ newValues, bonusValues, setBonusValues });
            onBoardEquipment.mines.length && ([newValues.health, minesToRemove] = checkCollisions(newValues, onBoardEquipment.mines, minesToRemove));
            bulletsOnGameBoard.length && ([newValues.health, bulletsToRemove] = checkCollisions(newValues, bulletsOnGameBoard, bulletsToRemove));

            updatedValues[index] = { id, active, values: { ...newValues }, keys };
        };
    });

    activePlayersPairs.forEach(([a, b]) => {
        const [pA, pB] = [updatedValues[a], updatedValues[b]];
        const [positionA, positionB] = [pA.values.position, pB.values.position];
        const [speedA, speedB] = [pA.values.speed, pB.values.speed];
        const distanceBetween = getDistance(positionA, positionB);
        if (distanceBetween < consts.PLAYER_RADIUS * 2) {

            const collisionForce = getVectorMagnitude(speedA) + getVectorMagnitude(speedB);
            updatedValues[a].values.health -= collisionForce;
            updatedValues[b].values.health -= collisionForce;

            let normalVector = getNormalVector(positionA, positionB);
            const collisionDepth = consts.PLAYER_RADIUS * 2 - distanceBetween;
            [updatedValues[a].values.position, updatedValues[b].values.position] =
                eliminateCollisionDepth(positionA, positionB, normalVector, collisionDepth);
            normalVector = getNormalVector(updatedValues[a].values.position, updatedValues[b].values.position);

            // 1. from: https://imada.sdu.dk/~rolf/Edu/DM815/E10/2dcollisions.pdf
            const unitNormalVector = getUnitNormalVector(normalVector, consts);
            const unitTangentVector = getUnitTangentVector(unitNormalVector);
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
            const resultSpeedNormalVectorA = multiplyVectors(resultSpeedNormalA, unitNormalVector);
            const resultSpeedTangentVectorA = multiplyVectors(resultSpeedTangentA, unitTangentVector);
            const resultSpeedNormalVectorB = multiplyVectors(resultSpeedNormalB, unitNormalVector);
            const resultSpeedTangentVectorB = multiplyVectors(resultSpeedTangentB, unitTangentVector);
            // 7.
            const resultSpeedA = addVectors(resultSpeedNormalVectorA, resultSpeedTangentVectorA);
            const resultSpeedB = addVectors(resultSpeedNormalVectorB, resultSpeedTangentVectorB);

            updatedValues[a].values.speed = resultSpeedA;
            updatedValues[b].values.speed = resultSpeedB;
        }
    });

    return [updatedValues, minesToRemove, bulletsToRemove];
}

export { updatePlayersValues };