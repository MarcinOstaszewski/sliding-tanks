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
    margin: 48px 0;
    flex-direction: column;
    .d-flex {
        display: flex;
    }
    .hidden {
        display: none !important;
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
        color: ${coloursPalette.secondary};
        text-transform: uppercase;
    `
}

export {
    coloursPalette,
    basicStyles,
    headers
};