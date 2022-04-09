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
        font-size: 20px;
        font-weight: bold;
        padding: 30px 0 20px;
        text-decoration: underline;
    }
    p {
        padding: 5px 0;
    }
    ul {
        list-style: disc;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default WelcomeStyled;