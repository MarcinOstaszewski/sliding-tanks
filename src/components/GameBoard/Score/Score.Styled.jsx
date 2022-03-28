import styled from 'styled-components';

const ScoreStyled = styled.div`
    p {
        position: absolute;
        font-size: 32px;
        font-weight: bold;
        opacity: .5;
        &.top {
            top: 35px;
        }
        &.left {
            left: 35px;
        }
        &.right {
            right: 35px;
        }
        &.bottom {
            bottom: 35px;
        }
    }

`
export default ScoreStyled;