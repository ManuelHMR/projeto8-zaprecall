import "./../css/main.css" 
import reverse from "./../assets/setinha.png"
import greenImg from "./../assets/green-check.svg"
import orangeImg from "./../assets/orange-question-mark.svg"
import redImg from "./../assets/red-lose-circle.svg"
import { useState } from "react"

export default function Card({index, question, answer, setResult}){
    const [state, setState] = useState(`displayed`);
    const[status, setStatus] = useState('');
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
                    <p className="red-background" onClick={()=> {setState(`unflipped`); setStatus('red'); setResult((oldArr)=> [...oldArr,redImg])}}>Não lembrei</p>
                    <p className="orange-background" onClick={()=>{setState(`unflipped`); setStatus('orange'); setResult((oldArr)=> [...oldArr,orangeImg])}}>Quase não lembrei</p>
                    <p className="green-background" onClick={()=>{setState(`unflipped`); setStatus('green'); setResult((oldArr)=> [...oldArr,greenImg])}}>Zap!</p>
                </div>
            </div>
        )
    }
    if(state === `unflipped`){
        let imgResult
        if(status === 'red'){
            imgResult = redImg
        }
        if(status === 'orange'){
            imgResult = orangeImg
        }
        if(status === 'green'){
            imgResult = greenImg
        }
        return (
            <div className="unflipped">
                <h2 className={status}>Pergunta {index}</h2>
                <img src={imgResult} alt="result"/>
            </div>
        )}
}