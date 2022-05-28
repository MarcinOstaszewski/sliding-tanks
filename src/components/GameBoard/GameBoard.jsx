import './GameBoardStyles.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Players from './Players/Players';
import Goals from './Goals/Goals';
import Score from './Score/Score';
import Workshop from './Workshop/Workshop';
import Explosions from './Explosions/Explosions';
import GameEquipment from './GameEquipment/GameEquipment';
import useInterval from '../../hooks/useInterval';
import { consts, updatePlayersValues, setKeyListeners, unsetKeyListeners, getColorFromValue } from '../../helpers';
import Borders from './Borders/Borders';
import Bonus from './Bonus/Bonus';
import { updateBonusValues } from '../../helpers/bonusHelpers';
import { gameEquipmentActions } from '../../store';

const keysPressed = {};

const GameBoard = (props) => {
    let gameWon;
    const [keysListenersReady, setKeysListenersReady] = useState(false);
    const [explosions, setExplosions] = useState([]);
    const gameSettings = useSelector(state => state.gameSettings);
    const onBoardEquipment = useSelector(state => state.gameEquipment);
    const dispatch = useDispatch();

    useEffect(() => {
        return unsetKeyListeners;
    }, []);

    if (!keysListenersReady) {
        setKeyListeners();
        setKeysListenersReady(true);
    };

    const checkEquipmentToAdd = (values, equipmentToAdd) => {
        values = values.map(player => {
            if (player.values.equipmentToAdd) {
                equipmentToAdd.push(player.values.equipmentToAdd);
                delete player.values.equipmentToAdd;
            }
            return player;
        });
        return [values, equipmentToAdd];
    }

    const showExplodingMines = minesToRemove => {
        const explosionsToSet = [];
        Object.keys(minesToRemove).forEach(mine => {
            explosionsToSet.push({
                position: minesToRemove[mine],
                timestamp: Date.now()
            })
            console.log(explosionsToSet);
        })
        setExplosions(explosionsToSet);
    }

    useInterval(() => {
        let equipmentToAdd = [];
        let minesToRemove = {};

        props.setBonusValues(updateBonusValues(props.bonusValues));
        let updatedPlayersValues;
        [updatedPlayersValues, minesToRemove] = updatePlayersValues({
            playersValues: props.playersValues,
            goalValues: props.goalValues,
            setGoalValues: props.setGoalValues,
            bonusValues: props.bonusValues,
            setBonusValues: props.setBonusValues,
            activePlayersPairs: props.activePlayersPairs,
            gameSettings,
            onBoardEquipment,
            minesToRemove
        });
        [updatedPlayersValues, equipmentToAdd] = checkEquipmentToAdd(updatedPlayersValues, equipmentToAdd);
        if (equipmentToAdd.length) {
            dispatch(gameEquipmentActions.addNewGameEquipment(equipmentToAdd));
        }
        if (Object.keys(minesToRemove).length > 0) {
            showExplodingMines(minesToRemove);
            dispatch(gameEquipmentActions.removeMinesFromBoard(Object.keys(minesToRemove)));
        }

        props.setPlayersValues(updatedPlayersValues);
    }, consts.FRAME_INTERVAL);

    if (consts.FRAME_INTERVAL === null) {
        gameWon = (
            <div className="game-won">
                <div className="game-won-bg" style={{
                    backgroundColor: getColorFromValue(consts.WINNING_PLAYER.colour)
                }}></div>
                <div className="game-won-titles" style={{
                    color: getColorFromValue(consts.WINNING_PLAYER.colour)
                }}>
                    <strong>The Winner is</strong>
                    <strong>{consts.WINNING_PLAYER.id}</strong>
                    <button className="restart" onClick={() => window.location.href = '/'}>RESTART GAME</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Borders />
            <Score playersValues={props.playersValues} />
            <Goals goalValues={props.goalValues} />
            <Bonus bonusValues={props.bonusValues} />
            <Players playersValues={props.playersValues} />
            <GameEquipment onBoardEquipment={onBoardEquipment} />
            <Explosions
                explosions={explosions}
                setExplosions={setExplosions} />
            <Workshop />
            {gameWon}
        </div>
    );
}

export default GameBoard;

export { keysPressed };
