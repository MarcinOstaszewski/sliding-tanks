import styled from 'styled-components';
import { coloursPalette } from '../../helpers/stylesCommons';


const StyledSettings = styled.div`
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 48px 0;
    flex-direction: column;
    h1 {
        margin: 12px 48px;
        padding: 4px 0;
        color: ${coloursPalette.secondary};
        font-weight: bold;
        border-bottom: 2px solid ${coloursPalette.secondary};
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
                padding: 6px 60px;
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
            }
        }
    }
`

export default StyledSettings;