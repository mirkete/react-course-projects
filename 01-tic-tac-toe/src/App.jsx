import "./App.css"
import { Board } from "./components/Board/Board.jsx"
import { useState } from "react"
import { obtainWinnerText } from "./logic/Board.js"
import {Button} from "./components/Button/Button.jsx"

export function App({children}){

    const [winner, setWinner] = useState(false)

    function updateWinner(value){
        setWinner(value)
    }

    return(
        <div className="container">
            <header>
                <h1 className="rc-board-winner-text">
                    {obtainWinnerText(winner)}
                </h1>
            </header>
            <Board winner={winner} updateWinner={updateWinner}></Board>
        </div>
    )
}