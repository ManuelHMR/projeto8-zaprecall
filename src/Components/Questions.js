import "./../css/main.css";
import Card from "./Card";

export default function Questions({deck, setResultP}){
    const questions = deck;  
    return (
        <>
            {questions.map(({question,answer,status,setResultP},index) => (
                    <Card 
                        index={index+1}
                        question = {question}
                        answer={answer}
                        key={question}
                        status={status}
                        setResultP = {setResultP}
                    />  
            ))}
        </>    
    );
}