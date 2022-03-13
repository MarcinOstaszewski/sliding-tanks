import styled from "styled-components";

export const StyledPlayer = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 9px 9px 5px 5px;
    background-color: ${props => props.values.backgroundColor};
    position: absolute;
    transform: rotate(${props => props.values.angle}deg);
    left: ${props => props.values.position.x}px;
    top: ${props => props.values.position.y}px;
    &::before,
    &:after {
        content: "";
        position: absolute;
        background-color: #fff;
    }
    &:before {
        top: 10px;
        left: 6px;
        width: 14px;
        height: 10px;
        border-radius: 3px;
    }
    &:after {
        top: 1px;
        left: 11px;
        width: 4px;
        height: 10px;
    }
`;
