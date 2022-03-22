import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/style.css";
import StartScreen from "./Components/StartScreen";


function App(){
    return(
        <>
            <StartScreen/>
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector(`.root`));