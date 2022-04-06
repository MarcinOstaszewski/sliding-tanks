import { consts } from '../helpers';

const getRandomBeteween = (min, max) => Math.random() * (max - min) + min / 2;

export const getRandomGoalPosition = () => ({
    x: getRandomBeteween(consts.PLAYER_RADIUS * 4, consts.WINDOW_WIDTH),
    y: getRandomBeteween(consts.PLAYER_RADIUS * 4, consts.WINDOW_HEIGHT)
})

export const getRandomGoalSpeed = () => ({
    x: getRandomBeteween(-3, 3),
    y: getRandomBeteween(-3, 3),
})

export const goalData = {
    position: getRandomGoalPosition(),
    speed: getRandomGoalSpeed(),
    width: consts.PLAYER_RADIUS * 4,
    height: consts.PLAYER_RADIUS * 4,
    prize: 1
}