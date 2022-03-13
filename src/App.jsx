import "./App.css";
import Players from "./components/Players/Players";
import { playersData } from "./store/playersData";
import useInterval from './hooks/useInterval';
import { validateRotationSpeed, updateSpeed, updatePosition } from './helpers/index';
import { useState } from 'react';
import { consts } from './helpers'

const keysPressed = {};

function App() {
    const [playersValues, setPlayersValues] = useState([...playersData]);
    const [keysListenersReady, setKeysListenersReady] = useState(false);

    const onKeyDown = e => {
        keysPressed[e.code] = 1;
    }
    const onKeyUp = e => {
        delete keysPressed[e.code];
    }
    if (!keysListenersReady) {
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
        setKeysListenersReady(true);
    };

    const updatePlayersValues = (playersValues) => {
        let updatedValues = [];
        playersValues.forEach(({ id, values, keys }, index) => {
            if (index === 0) {
                const newValues = { ...values };
                newValues.rotationSpeed = validateRotationSpeed(newValues, keys);
                newValues.angle += newValues.rotationSpeed;
                newValues.speed = updateSpeed(newValues, keys);
                newValues.position = updatePosition(newValues);

                updatedValues[index] = { id, values: { ...newValues }, keys };
            }
        });
        return updatedValues;
    }

    useInterval(() => {
        setPlayersValues(updatePlayersValues(playersValues));
    }, consts.FRAME_INTERVAL);

    return (
        <div className="App" >
            {playersValues && <Players playersValues={playersValues} />}
        </div>
    );
}

export default App;

export { keysPressed };