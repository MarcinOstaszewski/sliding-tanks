import styled from 'styled-components';

const StyledUl = styled.ul`
    position: fixed;
    top: 0px;
    right: 0px;;
    display: flex;
    opacity: .25;
    transition: .2s;
    & li {
        padding: 6px 10px 7px 11px;
        background-color: #12553b;
        color: #67b497;
        border-right: 1px solid #0a3323;
        border-left: 1px solid #3f8b6e;
        cursor: pointer;
        transition: .2s;
        &:hover {
            background-color: #1a7552;
            transition: .2s;
            padding: 7px 11px 6px 10px;
        }
    }
    &:hover {
        opacity: 1;
        transition: .2s;
    }
`

export { StyledUl };