import styled from 'styled-components';
import { coloursPalette, basicStyles, headers } from '../../helpers/stylesCommons';


const StyledSettings = styled.div`
    ${basicStyles}
    h1 {
        ${headers.h1}
    }
    .active-players-selector {
        background-color: ${coloursPalette.secondary};
        color: ${coloursPalette.secondaryLight};
        padding: 36px 60px 36px 48px;
        border-radius: 0 12px 12px 0;
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 12px;
            li {
                padding: 6px 32px;
                margin: 6px 0;
                border: 1px solid transparent;
                &.active {
                    border: 1px solid ${coloursPalette.secondaryLight};
                    background-color: ${coloursPalette.primaryLight};
                    &:hover {
                        background-color: ${coloursPalette.primary};
                    }
                }
                &:hover {
                    background-color: ${coloursPalette.primary};
                }
                div {
                    width: 12px;
                    height: 12px;
                    border: 2px solid #333;
                    margin-left: 32px;
                    display: inline-block;
                    background-color: black;
                }
            }
        }
    }
`

export default StyledSettings;