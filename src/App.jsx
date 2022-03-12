import "./App.css";
import Players from "./components/Players/Players";
import { useState } from 'react';

const keysPressed = {};

function App() {
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

    return (
        <div className="App" >
            <Players />
        </div>
    );
}

export default App;

export { keysPressed };