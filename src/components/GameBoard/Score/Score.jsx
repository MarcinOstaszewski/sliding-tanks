import ScoreStyled from './Score.Styled';

const Score = (props) => {
    return (
        <ScoreStyled>
            <p className="top left player1">
                {props.playersValues[0]?.values?.points}
            </p>
            <p className="top right player2">
                {props.playersValues[1]?.values?.points}
            </p>
            <p className="bottom right player3">
                {props.playersValues[2]?.values?.points}
            </p>
            <p className="bottom left player4">
                {props.playersValues[3]?.values?.points}
            </p>
        </ScoreStyled>)
}

export default Score;