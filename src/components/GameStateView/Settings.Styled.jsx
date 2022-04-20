import styled from 'styled-components';
import { coloursPalette, basicStyles, headers } from '../../helpers/stylesCommons';

const StyledSettings = styled.div`
    ${basicStyles}
    h1 {
        ${headers.h1}
    }
    .settings-container {
        margin-bottom: 36px;
        padding: 18px 60px 18px 48px;
        color: ${coloursPalette.secondary};
        background-color: ${coloursPalette.veryLightGrey};
    }
    .active-players-selector {
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
                    cursor: pointer;
                    position: relative;
                    color: ${coloursPalette.tertiary};
                    padding: 6px 16px 6px 32px;
                    margin: 12px 0;
                    border: 1px solid transparent;
                    transition: .2s;
                    &.active {
                        color: ${coloursPalette.secondaryLight};
                        background-color: ${coloursPalette.secondary};
                        &:hover {
                            background-color: ${coloursPalette.primary};
                        }
                    }
                    &.active::before {
                        content: '';
                        position: absolute;
                        left: 13px;
                        top: 10px;
                        height: 10px;
                        width: 5px;
                        border: 0px;
                        border-right: 2px solid ${coloursPalette.secondaryLight};
                        border-bottom: 2px solid ${coloursPalette.secondaryLight};
                        transform: rotate(40deg);
                    }
                    &:hover {
                        background-color: ${coloursPalette.secondaryLight};
                        transition: .2s;
                    }
                    .player-colour {
                        width: 16px;
                        height: 16px;
                        margin-left: 32px;
                    }
                }
                .player-keys {
                    position: relative;
                    font-size: 12px;
                    padding: 12px;
                    cursor: pointer;
                    margin-left: 18px;
                    transition: .2s;
                    color: ${coloursPalette.secondary};
                    text-decoration: underline;
                    &:hover, &.active {
                        border-color: ${coloursPalette.secondary};
                        border-style: solid;
                        border-width: 0px;
                        border-bottom-width: 1px;
                        transition: .2s;
                    }
                    &:hover {
                        background-color: ${coloursPalette.secondaryLight};
                    }
                    &.active::after {
                        content: '';
                        position: absolute;
                        top: 12px;
                        right: -36px;
                        border-color: ${coloursPalette.secondary};
                        width: 12px;
                        height: 12px;
                        border-style: solid;
                        border-width: 2px 2px 0 0;
                        transform: rotate(45deg);
                        animation: horizontalWave .6s ease-in-out infinite alternate;
                    }
                }
            }
        }
        .active-keys-display {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 90px;
            padding-top: 12px;
        }
        .player-display {
            display: flex;
            justify-content: flex-start;
            &-title {
                margin: 6px 0;
            }
        }
        .key-display {
            cursor: pointer;
            width: 96px;
            height: 24px;
            margin: 12px 6px;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            border-width: 0;
            border-bottom-color: ${coloursPalette.secondary};
            border-bottom-style: solid;
            border-bottom-width: 3px;
            border-radius: 0 0 3px 3px;
            :focus {
                outline: none;
            }
        }
        input[type=range].colour-range-input {
            -webkit-appearance: none;
            margin-top: 10px;
            width: 100%;
            height: 12px;
            cursor: pointer;
            background-image: linear-gradient(to right,
                 hsl(0, 100%, 35%),
                 hsl(60, 100%, 35%),
                 hsl(120, 100%, 35%),
                 hsl(180, 100%, 35%),
                 hsl(240, 100%, 35%),
                 hsl(300, 100%, 35%),
                 hsl(360, 100%, 35%)
                 
            );
            ::-webkit-slider-thumb {
                -webkit-appearance: none;
                border: 6px solid #000;
                height: 24px;
                width: 12px;
                border-left: none;
                border-right: none;
                background: transparent;
                border-radius: 6px;
                cursor: pointer;
            }
            ::-moz-range-thumb {
                -webkit-appearance: none;
                border: 1px solid #000;
                height: 12px;
                width: 12px;
                background: transparent;
                border-radius: 4px;
                cursor: pointer;
            }
            :focus {
                outline: none;
            }
        }
    }
    @keyframes horizontalWave {
        0% { right: -30px;}
        100% { right: -38px;}
    }
`

export default StyledSettings;