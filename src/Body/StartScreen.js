import logo from "./../assets/logo.svg"
import "./../css/start-screen.css";
import { useState } from "react";

export default function StartScreen(){
    const [started, setStarted] = useState(false);

    return !started ?(
        <div className="start-screen">
            <img src={logo} alt="ZapRecalls logo"/>
            <h1>ZapRecall</h1>
            <button onClick={()=> setStarted(true)}>
                Iniciar Recall!
            </button>
        </div>
    ) : (``)
}