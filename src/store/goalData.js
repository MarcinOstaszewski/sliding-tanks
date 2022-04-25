import { consts, getRandomPosition, getRandomSpeed } from '../helpers';

export const goalData = {
    position: getRandomPosition(),
    speed: getRandomSpeed(),
    width: consts.PLAYER_RADIUS * 4,
    height: consts.PLAYER_RADIUS * 4,
    prize: 1
}