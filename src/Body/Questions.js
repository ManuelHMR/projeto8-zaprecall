import "./../css/main.css";
import QuestionBox from "./QuestionBox";

const questions = [
    {
        number: 1,
    },
    {
        number: 2,
    },
    {
        number: 3,
    },
    {
        number: 4,
    },
    {
        number: 5,
    },
    {
        number: 6,
    },
    {
        number: 7,
    },
    {
        number: 8,
    }];

export default function Questions(){

    return (
        <>
            {questions.map(({number}) => (
                    <QuestionBox 
                        number={number}
                    />  
            ))}
        </>    
    );
}