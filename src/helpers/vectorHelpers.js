const getVectorMagnitude = vector => Math.sqrt(vector.x ** 2 + vector.y ** 2);

const getDistance = (posA, posB) => {
    return Math.sqrt((posA.x - posB.x) ** 2 + (posA.y - posB.y) ** 2);
}

const getNormalVector = (p1, p2) => ({
    x: p2.x - p1.x,
    y: p2.y - p1.y
});

const getUnitNormalVector = (vector, consts) => {
    const vectorMagnitude = getVectorMagnitude(vector) / consts.SPEED_FACTOR_AFTER_COLLISION;
    return {
        x: vector.x / vectorMagnitude,
        y: vector.y / vectorMagnitude
    }
};

const getUnitTangentVector = (vector) => ({
    x: - vector.y,
    y: vector.x
});

const multiplyVectors = (unit, vector) => ({
    x: vector.x * unit,
    y: vector.y * unit
});

const addVectors = (vectorA, vectorB) => ({
    x: vectorA.x + vectorB.x,
    y: vectorA.y + vectorB.y
});

const dotProduct = (v1, v2) => v1.x * v2.x + v1.y * v2.y;

export {
    getVectorMagnitude,
    getDistance,
    getNormalVector,
    getUnitNormalVector,
    getUnitTangentVector,
    multiplyVectors,
    addVectors,
    dotProduct
}