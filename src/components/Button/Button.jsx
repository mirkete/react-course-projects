import { useState } from "react"
import "./Button.css"

function Button({text}){

    const [clicked, setClicked] = useState(false)

    const innerText = clicked ? "Clicked!" : text

    function changeText(){
        setClicked(!clicked)
    }

    return (
      <button onClick={changeText} className="cr-button">
        {innerText}
      </button>
    )
}

export {Button}