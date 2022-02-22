import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { keysActions } from "./store/index";
import Players from "./components/Players/Players";

function App() {
    const dispatch = useDispatch();
    const keysPressed = useSelector(state => state.keysPressed);

    const onKeyDown = e => {
        dispatch({ type: keysActions.addKey(), payload: e.code });
    };

    const onKeyUp = e => {
        console.log(keysPressed);
        dispatch({ type: keysActions.delKey(), payload: e.code });
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return (
        <div className="App">
            <Players />
        </div>
    );
}

export default App;
