import { getRandomBetween, getRandomPosition } from '../helpers';

export const bonusNames = {
    MINE: 'mine',
    REPAIR: 'repair',
    BULLET: 'bullet',
}

const activeBonusArrays = {
    0: bonusNames.MINE,
    1: bonusNames.REPAIR,
    2: bonusNames.BULLET,
    // 3: 'missile'
}

export const resetBonusValues = () => ({
    position: getRandomPosition('upper'),
    speed: { x: 0, y: getRandomBetween(1, 2.5) },
    bonusType: activeBonusArrays[Math.floor(getRandomBetween(0, Object.keys(activeBonusArrays).length))]
});

export const bonusData = resetBonusValues();