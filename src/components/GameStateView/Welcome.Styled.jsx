import styled from 'styled-components';
import {
    // coloursPalette,
    basicStyles,
    headers
} from '../../helpers/stylesCommons';

const WelcomeStyled = styled.div`
    ${basicStyles}
    h1 {
        ${headers.h1}
    }
`;

export default WelcomeStyled;