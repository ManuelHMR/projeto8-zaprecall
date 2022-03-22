import "./../css/main.css" 
import "./../css/footer.css" 

import Card from "./Card";
import { useState } from "react";

import greenImg from "./../assets/green-check.svg"
import orangeImg from "./../assets/orange-question-mark.svg"
import redImg from "./../assets/red-lose-circle.svg"
import party from "./../assets/party.png"
import sad from "./../assets/sad.png"

export default function Main(){
    const [result, setResult] = useState([])
    return (
        <main>
            <>
                {deck.map(({question,answer,status},index) => (
                    <Card 
                        index={index+1}
                        question = {question}
                        answer={answer}
                        key={question}
                        status={status}
                        setResult={setResult}
                    />  
                ))}
            </>    
            <Footer
            result={result}
            />
        </main>
    )
}
const deckReact = [
    {
        question: `O que é JSX?`,
        answer: `Uma extensão de linguagem do JavaScript`,
        status: ``,
        
    },
    {
        question: `O React é __`,
        answer: `Uma biblioteca JavaScript para construção de interfaces`,
        status: ``,
    },
    {
        question: `Componentes devem iniciar com __ `,
        answer: `Letra maiúscula`,
        status: ``,
    },
    {
        question: `Podemos colocar __ dentro do JSX`,
        answer: `Expressões`,
        status: ``,
        
    },
    {
        question: `O ReactDOM nos ajuda __ `,
        answer: `Interagindo com a DOM para colocar componentes React na mesma`,
        status: ``,
    },
    {
        question: ` Usamos o npm para __`,
        answer: `Gerenciar os pacotes necessários e suas dependências`,
        status: ``,
    },
    {
        question: `Usamos props para __`,
        answer: `Passar diferentes informações para componentes`,
        status: ``,
    },
    {
        question: `Usamos estado (state) para __`,
        answer: `Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente`,
        status: ``,
    },  
];
const deck = [...deckReact].sort(function() { return 0.5 - Math.random() })

function Footer({result}){
    if (result.length < deck.length){
        return(
            <footer>
                <h1>{result.length}/{deck.length} CONCLUÍDOS</h1>
                <div className="icons">
                    {result.map((cor)=>(
                        <img src={cor} alt="icon" key={cor}/>
                    ))}
                </div>    
            </footer>
        )
    }
    if(result.length === deck.length){
        if(result.includes(redImg)){
            return(
                <footer>
                    <>

                    <h3>Putz...</h3>
                    </>
                    <img src={sad} alt="rostinho triste"/>
                    <p>Ainda faltam alguns...
Mas não desanime!</p>
                    <h1>{result.length}/{deck.length} CONCLUÍDOS</h1>
                    <div className="icons">
                        {result.map((cor)=>(
                            <img src={cor} alt="icon" key={cor}/>
                        ))}
                    </div>    
            </footer>
            )
        }
        else{
            return(
                <footer>
                    <>
                        <img src={party} alt="rostinho feliz"/>
                        <h3>Parabéns!</h3>
                    </>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <h1>{result.length}/{deck.length} CONCLUÍDOS</h1>
                    <div className="icons">
                        {result.map((color)=>(
                            <img src={color} alt="icon" key={color}/>
                        ))}
                    </div>    
            </footer>
            )
        }
    }
}