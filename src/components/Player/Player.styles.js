import styled from "styled-components";

export const StyledPlayer = styled.div `
    width: 24px;
    height: 24px;
    background-color: ${props => props.playersData[props.id].values};
    position: absolute;
    left: ${props => props.playersData[props.id].values.position.x}px;
    top: ${props => props.playersData[props.id].values.position.y}px;
    transform: rotate(${props => props.playersData[props.id].values.angle}deg);
`;