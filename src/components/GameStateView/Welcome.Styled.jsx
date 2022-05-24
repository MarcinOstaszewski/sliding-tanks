import styled from 'styled-components';
import {
    coloursPalette,
    basicStyles,
    headers
} from '../../helpers/stylesCommons';

const WelcomeStyled = styled.div`
    ${basicStyles}
    align-items: center;
    h1.main-title {
        ${headers.h1}
        margin: 0px 0px 32px;
        font-size: 120px;
        line-height: 96px;
        text-shadow: 3px 4px 2px black;
        text-align: center;
        span:nth-of-type(2) {
            color: ${coloursPalette.secondary}
        }
    }

    h2 {
        ${headers.h2}
    }
    p {
        padding: 3px 0;
    }
    ul {
        font-family: 'Titan One', cursive;
        list-style: disc;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default WelcomeStyled;