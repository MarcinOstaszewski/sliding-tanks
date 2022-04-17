import styled from 'styled-components';
import { consts } from '../../../helpers/consts';

const ScoreStyled = styled.div`
    p {
        position: absolute;
        font-size: 32px;
        font-weight: bold;
        opacity: .5;
        &.top {
            top: ${consts.PLAYER_RADIUS * 2}px;
        }
        &.left {
            left: ${consts.PLAYER_RADIUS * 2}px;
        }
        &.right {
            right: ${consts.PLAYER_RADIUS * 3}px;
        }
        &.bottom {
            bottom: ${consts.PLAYER_RADIUS * 3}px;
        }
    }

`
export default ScoreStyled;