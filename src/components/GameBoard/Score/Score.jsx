import ScoreStyled from './Score.Styled';
import { getColorFromValue } from '../../../helpers';

const Score = (props) => {
    const showPlayersScore = (pos, id) => (
        <p className={`${pos} player${+id + 1}`} style={{ color: getColorFromValue(props.playersValues[id]?.values?.backgroundColor) }}>
            {props.playersValues[id]?.values?.points}
        </p>
    );

    return (
        <ScoreStyled>
            {showPlayersScore('top left', 0)}
            {showPlayersScore('top right', 1)}
            {showPlayersScore('bottom right', 2)}
            {showPlayersScore('bottom left', 3)}
        </ScoreStyled>)
}

export default Score;