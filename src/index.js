import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/style.css";
import StartScreen from "./Body/StartScreen";
import Header from "./Body/Header";
import Main from "./Body/Main";
import Footer from "./Body/Footer";


function App(){
    return(
        <>
            <StartScreen/>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

ReactDOM.render(<App/>, document.querySelector(`.root`));