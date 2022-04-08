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
                display: flex;
                align-items: center;
                div {
                    display: inline-block;
                }
                .player-button {
                    padding: 6px 32px;
                    margin: 6px 0;
                    border: 1px solid transparent;
                    transition: .2s;
                    &.active {
                        border: 1px solid ${coloursPalette.secondaryLight};
                        background-color: ${coloursPalette.primaryLight};
                        &:hover {
                            background-color: ${coloursPalette.primary};
                        }
                    }
                    &:hover {
                        background-color: ${coloursPalette.primary};
                        transition: .2s;
                    }
                    .player-colour {
                        width: 12px;
                        height: 12px;
                        border: 2px solid ${coloursPalette.darkGray};
                        margin-left: 32px;
                        background-color: ${coloursPalette.black};
                    }
                }
                .player-keys {
                    border-radius: 3px;
                    padding: 4px 12px;
                    margin-left: 24px;
                    border: 2px solid ${coloursPalette.darkGray};
                    color: ${coloursPalette.darkGray};
                    transition: .2s;
                    &:hover, &.active {
                        color: ${coloursPalette.secondaryLight};
                        border: 2px solid ${coloursPalette.secondaryLight};
                        transition: .2s;
                    }
                }
            }
        }
        .active-keys-display {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* height: 160px; */
            margin: 0 0 0 40px;
            padding: 20px;
            border: 1px solid ${coloursPalette.secondaryLight};
        }
        .key-display {
            width: 100px;
            height: 45px;
            margin: 15px 5px;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            border: 1px solid ${coloursPalette.secondaryLight};
            border-radius: 10px 10px 5px 5px;
        }
    }
`

export default StyledSettings;