import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/style.css";
import StartScreen from "./Components/StartScreen";
// import Header from "./Components/Header";
// import Main from "./Components/Main";
// import Footer from "./Components/Footer";


function App(){
    return(
        <>
            <StartScreen/>
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector(`.root`));