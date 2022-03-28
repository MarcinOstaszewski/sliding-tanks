import { consts } from '../helpers';

const getRandomBeteween = (min, max) => Math.random() * (max - min) + min;

export const goalData = {
    position: {
        x: getRandomBeteween(consts.PLAYER_RADIUS, consts.WINDOW_WIDTH),
        y: getRandomBeteween(consts.PLAYER_RADIUS, consts.WINDOW_HEIGHT)
    },
    speed: {
        x: 0,
        y: 0
    }
}