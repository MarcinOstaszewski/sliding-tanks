import { mine } from '../../../assets/svg';

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

    return (
        <div className="on-board-equipment">
            {mines}
        </div>
    );
}

export default GameEquipment;