import styled from 'styled-components';
import { coloursPalette } from '../../helpers/stylesCommons';

const StyledGameOver = styled.div`
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 48px 0;
    flex-direction: column;
    h1 {
        margin: 12px 48px 20%;
        padding: 4px 0;
        color: ${coloursPalette.secondary};
        font-weight: bold;
        border-bottom: 2px solid ${coloursPalette.secondary};
    }
    .restart {
        padding: 12px;
        color: #c77;
        background-color: #fee;
    }
`

export { StyledGameOver };
