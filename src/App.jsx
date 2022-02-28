import "./App.css";
// import { playersActions } from "./store/index";
import { useSelector, 
    // useDispatch 
} from "react-redux";
import Players from "./components/Players/Players";
import useInterval from './hooks/useInterval';
import { useState } from 'react';

const keysPressed = {};

function App() {
    const [keysListenersReady, setKeysListenersReady] = useState(false);
    // const dispatch = useDispatch();
    const playersValues = useSelector(state => state.playersValues);
    // const newPlayersValues = [...playersValues];

    const onKeyDown = e => {
        keysPressed[e.code] = 1;
    }
    const onKeyUp = e =>  {
        delete keysPressed[e.code];
    }
    if (!keysListenersReady) {
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
        setKeysListenersReady(true);
    };
    

    playersValues.forEach((player, index) => {
        const newValues = {...player.values};

        if (keysPressed[player.keys.left]) {
            console.log('left')
            newValues.rotationSpeed = player.values.rotationSpeed - .1;
        }
        if (keysPressed[player.keys.rght]) {
            console.log('right')
            newValues.rotationSpeed = player.values.rotationSpeed + .1;
        }
        // newPlayersValues[index].values = newValues;
        
        return;
    });

    useInterval(() => {
        // dispatch(playersActions.updatePlayersValues(newPlayersValues));
    }, 1000);

    return (
        <div className="App" >
            <Players />
        </div>
    );
}

export default App;