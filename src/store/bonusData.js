import { consts, getRandomBetween, getRandomPosition } from '../helpers';

export const bonusData = {
    position: getRandomPosition(),
    speed: { x: 0, y: getRandomBetween(0, 1) },
    width: consts.PLAYER_RADIUS * 4,
    height: consts.PLAYER_RADIUS * 4,
    type: getRandomBetween(0, 4)
}