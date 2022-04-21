import { consts, getRandomBetween } from '../helpers';

export const getRandomGoalPosition = () => ({
    x: getRandomBetween(consts.PLAYER_RADIUS * 5, consts.WINDOW_WIDTH - consts.PLAYER_RADIUS * 5),
    y: getRandomBetween(consts.PLAYER_RADIUS * 5, consts.WINDOW_HEIGHT - consts.PLAYER_RADIUS * 5)
})

export const getRandomGoalSpeed = () => ({
    x: getRandomBetween(-3, 3),
    y: getRandomBetween(-3, 3),
})

export const goalData = {
    position: getRandomGoalPosition(),
    speed: getRandomGoalSpeed(),
    width: consts.PLAYER_RADIUS * 4,
    height: consts.PLAYER_RADIUS * 4,
    prize: 1
}