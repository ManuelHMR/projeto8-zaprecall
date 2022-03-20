import logo from "./../assets/logo.png"
import "./../css/header.css"

export default function Header(){
    return(
        <header>
            <img src={logo} alt="ZapRecall`s logo"/>
            <h1>ZapRecall</h1>
        </header>
    )
}