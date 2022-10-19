import { getRandomBetween, getRandomPosition } from '../helpers';

const bonusTypes = {
    0: 'mine',
    1: 'repair'
    // 2: 'bullet',
    // 3: 'missile'
}

export const resetBonusValues = () => ({
    position: getRandomPosition('upper'),
    speed: { x: 0, y: getRandomBetween(1, 2.5) },
    bonusType: bonusTypes[Math.floor(getRandomBetween(0, Object.keys(bonusTypes).length))]
});

export const bonusData = resetBonusValues();