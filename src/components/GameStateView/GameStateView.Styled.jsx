import styled from 'styled-components';
import { consts } from '../../helpers';
import { coloursPalette } from '../../helpers/stylesCommons';

const StyledUl = styled.ul`
    position: fixed;
    bottom: 0px;
    right: ${consts.PLAYER_RADIUS}px;
    display: flex;
    transition: .2s;
    & li {
        height: ${consts.PLAYER_RADIUS * 2}px;
        padding: 0 20px;
        background-color: ${coloursPalette.primary};
        color: ${coloursPalette.secondaryLight};
        border-right: 1px solid ${coloursPalette.primary};
        border-left: 1px solid ${coloursPalette.secondaryLight};
        cursor: pointer;
        transition: .2s;
        &:hover {
            background-color: ${coloursPalette.primaryLight};
            transition: .2s;
            padding: 0 21px 0 19px;
        }
    }
`

export { StyledUl };