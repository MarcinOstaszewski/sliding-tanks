import ScoreStyled from './Score.Styled';

const Score = (props) => {
    return (
        <ScoreStyled>
            <p className="top left player1" style={{ color: props.playersValues[0]?.values?.backgroundColor }}>
                {props.playersValues[0]?.values?.points}
            </p>
            <p className="top right player2" style={{ color: props.playersValues[1]?.values?.backgroundColor }}>
                {props.playersValues[1]?.values?.points}
            </p>
            <p className="bottom right player3" style={{ color: props.playersValues[2]?.values?.backgroundColor }}>
                {props.playersValues[2]?.values?.points}
            </p>
            <p className="bottom left player4" style={{ color: props.playersValues[3]?.values?.backgroundColor }}>
                {props.playersValues[3]?.values?.points}
            </p>
        </ScoreStyled>)
}

export default Score;