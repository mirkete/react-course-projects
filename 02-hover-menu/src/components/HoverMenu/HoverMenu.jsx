import "./HoverMenu.css"

export function HoverMenu({children}){

    return(
        <div className="menu-container">
            <div className="menu">
                {children}
            </div>
        </div>
    )
}