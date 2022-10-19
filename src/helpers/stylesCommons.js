const coloursPalette = {
    primary: '#4d784e',
    primaryLight: '#6ea171',
    secondary: '#675645',
    secondaryLight: '#e1d798',
    tertiary: '#424756',
    darkGray: '#333',
    black: '#000',
    veryLightGrey: '#eee'
};

const basicStyles = `
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 36px 0 0 0;
    flex-direction: column;
    .d-flex {
        display: flex;
    }
    .w-100 {
        width: 100%;
    }
`

const headers = {
    h1: `
        font-size: 36px;
        font-weight: bold;
        margin: 12px 48px;
        padding: 4px 0;
        color: ${coloursPalette.primary};
        text-transform: uppercase;
        font-family: 'Titan One', cursive;
        text-shadow: 2px 2px 0px black;
    `,
    h2: `
        font-size: 20px;
        font-weight: bold;
        padding: 24px 0 12px;
        text-decoration: underline;
    `
}
const restartButton = `
    cursor: pointer;
    padding: 12px;
    color: ${coloursPalette.secondaryLight};
    background-color: ${coloursPalette.secondary};
`

export {
    coloursPalette,
    basicStyles,
    headers,
    restartButton
};