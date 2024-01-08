import { TURNS, winnerCombos } from "../constants"

export function checkGameEnd({board, filledSquares, setFilledSquares}){

    let winner
    if(filledSquares === 9){
        winner = "DRAW"
        return winner
    }
    setFilledSquares(filledSquares + 1)

    
    winnerCombos.forEach(([first, second, third]) => {
        if(!board[first] || !board[second] || !board[third]) {
            return
        }
        
        if(board[first] === board[second] && board[first] === board[third]){
            winner = true
        }
    })

    return winner
}

export function updateSquare({board, setBoard, index, turn}){
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    return newBoard
}

export function changeTurn({turn, setTurn}){
    const newTurn = turn === TURNS["X"] ? TURNS["O"] : TURNS["X"]
    setTurn(newTurn)
    
    return newTurn
}

export function obtainWinnerText(winner){
    if(!winner) return "TIC-TAC-TOE!"
    if(winner === "DRAW") return "Hay empate!"

    return `El ganador es: ${winner}`
}

export function restartGame({setBoard, setFilledSquares, updateWinner}){
    setBoard(Array(9).fill(null))
    setFilledSquares(0)
    updateWinner(false)
}