import styled from 'styled-components';
import {
    headers,
    restartButton
} from '../../helpers/stylesCommons';

const StyledGameOver = styled.div`
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    flex-direction: column;
    h1 {
        ${headers.h1}
        margin-bottom: 48px;
    }
    .restart {
        ${restartButton}
    }
`

export { StyledGameOver };
