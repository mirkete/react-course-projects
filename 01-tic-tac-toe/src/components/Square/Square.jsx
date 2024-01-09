import "./Square.css"

export function Square({updateBoard, index, children}){

    const handleClick = () => {
        updateBoard(index)
    }
    
    return(
        <div className="square" onClick={handleClick}>
            {children}
        </div>    
    )
}