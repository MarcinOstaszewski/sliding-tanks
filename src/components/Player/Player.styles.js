import styled from "styled-components";

export const StyledPlayer = styled.div `
    width: 25px;
    height: 25px;
    background-color: ${props => props.values.backgroundColor};
    position: absolute;
    transform: rotate(${props => props.values.angle}deg);
    left: ${props => props.values.position.x}px;
    top: ${props => props.values.position.y}px;
    &:after {
        content: "";
        position: absolute;
        top: 2px;
        left: 5px;
        width: 15px;
        height: 4px;
        background-color: #fff;
    }
`;