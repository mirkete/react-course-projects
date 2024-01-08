import "./Board.css"
import { Square } from "../Square/Square.jsx"
import { useState } from "react"
import { updateSquare, changeTurn, checkGameEnd, restartGame} from "../../logic/Board.js"
import { TURNS } from "../../constants.js"

export function Board({updateWinner, winner}){

    const [turn, setTurn] = useState(TURNS["X"])
    const [board, setBoard] = useState(() => {
        return Array(9).fill(null)
    })
    const [filledSquares, setFilledSquares] = useState(0)

    const updateBoard = (index) => {
        if(winner) return
        if(board[index]) return

        const newBoard = updateSquare({board, setBoard, index, turn})

        const newFilledSquares = filledSquares + 1
        if(newFilledSquares === 9) {
            updateWinner("DRAW")
            return
        }
        setFilledSquares(newFilledSquares)
        
        const newWinner = checkGameEnd({turn, board:newBoard, filledSquares, setFilledSquares, updateWinner})
        
        if(newWinner){
            newWinner === "DRAW" ? updateWinner("DRAW") : updateWinner(turn)
            return
        }
        
        changeTurn({turn, setTurn})
    }

    const handleClick = () => {
        restartGame({setBoard, setFilledSquares, updateWinner})
    }

    return (
        <div className="rc-board">
            {
            board.map((_, i) => {
                return (
                    <Square index={i} updateBoard={updateBoard} key={`square${i}`}>
                        {board[i]}
                    </Square>
                )
            })
            }
            <button className="restart-button" onClick={handleClick}>Restart game</button>
        </div>
    )
}