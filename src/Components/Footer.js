import "./../css/footer.css" 
import greenImg from "./../assets/green-check.svg"
import orangeImg from "./../assets/orange-question-mark.svg"
import redImg from "./../assets/red-lose-circle.svg"

let result=[];

export default function Footer(deck){
    return (
        <footer>
            <h1>{result.length}/{deck.deck.length} CONCLUÍDOS</h1>
            {/* <Result
            result = {result}
            /> */}
        </footer>
    )
}

export function addResult(value){
    result.push(value)
    console.log(result)
}

// function Result({result}){  

//     return (
//         <div className="result">
//             {result.map((color) => (      
//             color
//             ))}
//         </div>     
//     );
// }