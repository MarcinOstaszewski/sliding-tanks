import styled from 'styled-components';
import { coloursPalette } from '../../helpers/stylesCommons';

const StyledUl = styled.ul`
    position: fixed;
    top: 0px;
    right: 0px;;
    display: flex;
    opacity: .25;
    transition: .2s;
    & li {
        padding: 6px 20px 7px 21px;
        background-color: ${coloursPalette.primary};
        color: ${coloursPalette.secondaryLight};
        border-right: 1px solid ${coloursPalette.primary};
        border-left: 1px solid ${coloursPalette.secondaryLight};
        cursor: pointer;
        transition: .2s;
        &:hover {
            background-color: ${coloursPalette.primaryLight};
            transition: .2s;
            padding: 7px 21px 6px 20px;
        }
    }
    &:hover {
        opacity: 1;
        transition: .2s;
    }
`

export { StyledUl };