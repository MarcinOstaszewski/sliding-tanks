import "./App.css";
import Players from "./components/Players/Players";
import { playersData } from "./store/playersData";
import useInterval from './hooks/useInterval';
import { updatePlayersValues, setKeyListeners } from './helpers/index';
import { useState } from 'react';
import { consts } from './helpers'

const keysPressed = {};

function App() {
    const [playersValues, setPlayersValues] = useState([...playersData]);
    const [keysListenersReady, setKeysListenersReady] = useState(false);

    if (!keysListenersReady) {
        setKeyListeners();
        setKeysListenersReady(true);
    };

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