import { useState } from "react"
import { Button } from "../Button/Button.jsx"
import "./ScrollableBar.css"

export function ScrollableBar({tags}){

    return (
            <div id="scrollbar" className="rc-scrollable-bar">
                <button className="rc-tag rc-tag-selected">Todos</button>
                <button className="rc-tag">De tus busquedas</button>
                <button className="rc-tag">Programacion</button>
                <button className="rc-tag">Videos relacionados</button>
            </div>
    )
}