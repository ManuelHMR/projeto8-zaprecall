import "./../css/main.css" 

export default function QuestionBox({number}){
    return (
        <div className="question-box">
            <h2>Pergunta {number}</h2>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}