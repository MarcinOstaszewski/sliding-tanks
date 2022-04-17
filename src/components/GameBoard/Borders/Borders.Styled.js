import styled from 'styled-components';
import { coloursPalette } from '../../../helpers/stylesCommons';
import { consts } from '../../../helpers/consts';

const BordersStyled = styled.div`
    .border {
        position: fixed;
        background-color: ${coloursPalette.primary};
    }
    .top-border {
        top: 0;
        height: 3px;
        width: 100%;
    }
    .right-border {
        width: ${consts.PLAYER_RADIUS}px;
        height: 100%;
        right: 0;

    }
    .bottom-border {
        height: ${consts.PLAYER_RADIUS * 2}px;
        width: 100%;
        bottom: 0;
    }
    .left-border {
        width: 3px;
        height: 100%;
    }
    
`;

export { BordersStyled };