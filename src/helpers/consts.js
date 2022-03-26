const consts = {
    PLAYER_RADIUS: 13,
    FRAME_INTERVAL: 24,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    SPEED_DELTA: .4,
    SPEED_MIN: .05,
    SPEED_MAX: 10,
    SPEED_DELTA_MAX: 5,
    SPEED_FRICTION: .98,
    SPEED_FACTOR_AFTER_COLLISION: 0.9,
    ROTATION_DELTA: .3,
    ROTATION_FRICTION: .96,
    ROTATION_DELTA_MAX: 5.5,
    ROTATION_DELTA_MIN: .1,
    WINDOW_HEIGHT: window.innerHeight,
    WINDOW_WIDTH: window.innerWidth,
    BOUNCE_FACTOR: -0.33,
}

export default consts;