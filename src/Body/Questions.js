import "./../css/main.css";
import Card from "./Card";

export default function Questions({deck}){
    const questions = [...deck].sort(function() { return 0.5 - Math.random() });  
    return (
        <>
            {questions.map(({question,answer},index) => (
                    <Card 
                        index={index+1}
                        question = {question}
                        answer={answer}
                        key={question}
                    />  
            ))}
        </>    
    );
}