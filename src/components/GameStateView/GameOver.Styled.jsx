import styled from 'styled-components';
import {
    coloursPalette,
    headers
} from '../../helpers/stylesCommons';

const StyledGameOver = styled.div`
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 48px 0;
    flex-direction: column;
    h1 {
        ${headers.h1}
        margin-bottom: 48px;
    }
    .restart {
        padding: 12px;
        color: #c77;
        background-color: #fee;
    }
`

export { StyledGameOver };
