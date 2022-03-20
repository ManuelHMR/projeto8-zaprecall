import "./../css/main.css" 

export default function QuestionBox({number}){
    return (
        <div className="question-box">
            <h2>Pergunta {number}</h2>
        </div>
    )
}