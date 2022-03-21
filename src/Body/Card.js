import "./../css/main.css" 
import reverse from "./../assets/setinha.png"
import { useState } from "react"

export default function Card({index, question, answer}){
    const [state, setState] = useState(`displayed`)
    if (state === `displayed`){
        return (
            <div className="displayed" onClick={() => setState(`flipped`)}>
                <h2>Pergunta {index}</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
    )};
    if(state === `flipped`){
        return (
            <div className="flipped" onClick={()=>setState(`answered`)}>
                <h2>{question}</h2>
                <img src={reverse} alt="seta curvada"/>
            </div>
        )
    }
    if(state === `answered`){
        return (
            <div className="flipped answered" onClick={()=>setState(`unflipped`)}>
                <h2>{answer}</h2>
            </div>
        )
    }
}