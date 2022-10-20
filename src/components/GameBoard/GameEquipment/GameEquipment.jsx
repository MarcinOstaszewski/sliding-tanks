import { mine } from '../../../assets/svg';
import { bullet } from '../../../assets/svg';

const GameEquipment = (props) => {
    const mines = props.onBoardEquipment.mines.map((position, index) => (
        <div
            key={index}
            className="mine"
            style={{
                left: position.x, top: position.y
            }}>
            {mine}
        </div>
    ));

    const bullets = props.bulletsOnGameBoard.map((item, index) => (
        <div
            key={index}
            className="bullet"
            style={{
                left: item.position.x, 
                top: item.position.y,
            }}>
            <div style={{ transform: `rotate(${item.angle}deg)` }}>
                {bullet}
            </div>
        </div>
    ));

    return (
        <div className="on-board-equipment">
            {mines}
            {bullets}
        </div>
    );
}

export default GameEquipment;