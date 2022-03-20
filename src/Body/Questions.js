import "./../css/main.css";
import QuestionBox from "./QuestionBox";
const questions = [
    {
        question: `O que é JSX?`,
    },
    {
        question: `O React é __`,
    },
    {
        question: `Componentes devem iniciar com __ `,
    },
    {
        question: `Podemos colocar __ dentro do JSX`,
    },
    {
        question: `O ReactDOM nos ajuda __ `,
    },
    {
        question: ` Usamos o npm para __`
    },
    {
        question: `Usamos props para __`,
    },
    {
        question: `Usamos estado (state) para __`
    }];

export default function Questions(){

    return (
        <>
            {questions.sort(function() { return 0.5 - Math.random() }).map(({question},index) => (
                    <QuestionBox 
                        index={index+1}
                        question={question}
                    />  
            ))}
        </>    
    );
}