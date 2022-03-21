import "./../css/main.css" 
import reverse from "./../assets/setinha.png"
import { useState } from "react"

export default function Card({index, question, answer}){
    const [state, setState] = useState(`displayed`);
    const[status, setStatus] = useState('');
    const results = [];
    if (state === `displayed`){
        return (
            <div className="displayed" onClick={() => setState(`flipped`)}>
                <h2>Pergunta {index}</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
    )};
    if(state === `flipped`){
        return (
            <div className="flipped">
                <h2>{question}</h2>
                <img src={reverse} alt="seta curvada" onClick={()=>setState(`answered`)}/>
            </div>
        )
    }
    if(state === `answered`){
        return (
            <div className="flipped answered">
                <h2>{answer}</h2>
                <div className="options">
                    <p className="red-background" onClick={()=> {setState(`unflipped`); setStatus('red'); results.push('red')}}>Não lembrei</p>
                    <p className="orange-background" onClick={()=>{setState(`unflipped`); setStatus('orange'); results.push('orange')}}>Quase não lembrei</p>
                    <p className="green-background" onClick={()=>{setState(`unflipped`); setStatus('green'); results.push('green')}}>Zap!</p>
                </div>
            </div>
        )
    }
    if(state === `unflipped`){
        return (
            <div className="unflipped">
                <h2 className={status}>Pergunta {index}</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )}
}