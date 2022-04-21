import { consts, getRandomBeteween } from '../helpers';

export const getRandomGoalPosition = () => ({
    x: getRandomBeteween(consts.PLAYER_RADIUS * 5, consts.WINDOW_WIDTH - consts.PLAYER_RADIUS * 5),
    y: getRandomBeteween(consts.PLAYER_RADIUS * 5, consts.WINDOW_HEIGHT - consts.PLAYER_RADIUS * 5)
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