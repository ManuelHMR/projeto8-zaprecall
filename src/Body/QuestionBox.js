import "./../css/main.css" 

export default function QuestionBox({question,index}){

    return (
        <div className="question-box" >
            <h2>Pergunta {index}</h2>
            <p className="hidden">{question}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}