// import styles from './Player.css';
import './Player.scss'

const Player = (props) => {
    console.log(props)
    let styles = {
        transform: `rotate(${props.values.angle}deg)`,
        left: `${props.values.position.x}px`,
        top: `${props.values.position.y}px`,

    }
    return (
        <div className="player" id={props.id} style={styles}></div>
    );
}

export default Player;