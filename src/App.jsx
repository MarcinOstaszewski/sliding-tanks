import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { keysActions } from "./store/index";
import Players from "./components/Players/Players";

function App() {
    const dispatch = useDispatch();
    const keysPressed = useSelector(state => state.keysPressed);

    useEffect(() => {
        const onKeyDown = e => {
            dispatch(keysActions.addKey(e.code));
        };

        const onKeyUp = e => {
            dispatch(keysActions.delKey(e.code));
        };
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
    }, [dispatch]);

    return (
        <div className="App">
            <Players />
        </div>
    );
}

export default App;
