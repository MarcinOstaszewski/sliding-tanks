import { consts } from '../helpers';

const xThird = consts.WINDOW_WIDTH / 3;
const yThird = consts.WINDOW_HEIGHT / 3;
const xTwoThirds = consts.WINDOW_WIDTH / 3 * 2;
const yTwoThirds = consts.WINDOW_HEIGHT / 3 * 2;

export const playersData = [{
    id: "player1",
    values: {
        position: {
            x: xThird,
            y: yThird,
        },
        angle: -45,
        speed: {
            x: 0,
            y: 0,
        },
        rotationSpeed: 0,
        backgroundColor: "blue",
        points: 0,
    },
    keys: {
        frwd: "KeyW",
        back: "KeyS",
        left: "KeyA",
        rght: "KeyD",
    },
},
{
    id: "player2",
    values: {
        position: {
            x: xTwoThirds,
            y: yThird,
        },
        angle: 45,
        speed: {
            x: 0,
            y: 0,
        },
        rotationSpeed: 0,
        backgroundColor: "red",
        points: 0,
    },
    keys: {
        frwd: "BracketLeft",
        back: "Quote",
        left: "Semicolon",
        rght: "Backslash",
    },
},
{
    id: "player3",
    values: {
        position: {
            x: xTwoThirds,
            y: yTwoThirds,
        },
        angle: 135,
        speed: {
            x: 0,
            y: 0,
        },
        rotationSpeed: 0,
        backgroundColor: "green",
        points: 0,
    },
    keys: {
        frwd: "ArrowUp",
        back: "ArrowDown",
        left: "ArrowLeft",
        rght: "ArrowRight",
    },
},
{
    id: "player4",
    values: {
        position: {
            x: xThird,
            y: yTwoThirds,
        },
        angle: 225,
        speed: {
            x: 0,
            y: 0,
        },
        rotationSpeed: 0,
        backgroundColor: "brown",
        points: 0,
    },
    keys: {
        frwd: "KeyJ",
        back: "KeyM",
        left: "KeyN",
        rght: "Comma",
    },
},
];