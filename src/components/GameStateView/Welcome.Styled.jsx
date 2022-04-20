import styled from 'styled-components';
import {
    // coloursPalette,
    basicStyles,
    headers
} from '../../helpers/stylesCommons';

const WelcomeStyled = styled.div`
    ${basicStyles}
    align-items: center;
    h1 {
        ${headers.h1}
    }
    h2 {
        ${headers.h2}
    }
    p {
        padding: 3px 0;
    }
    ul {
        list-style: disc;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default WelcomeStyled;