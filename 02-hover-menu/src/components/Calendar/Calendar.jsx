import "./Calendar.css"

export function Calendar({month, dayStart, daysNumber}){

    const days = Array(daysNumber).fill(null)
    const emptyDays = Array(dayStart - 1).fill(null)
    const todayDay = new Date(Date.now()).getDate()

    return(
        <>
            <h1 style={{textAlign:"center"}}>{month}</h1>
            <div className="calendar">
                {
                    emptyDays.map((_, i) => {return(
                        <div key={`emptyDay${i}`}>‎ </div>
                    )})
                }
                {
                    days.map((_, i) => {
                        if((i+1) === todayDay){
                            return (
                                <div className="selected" key={`day${i+1}`}>{i+1}</div>
                            )
                        }

                        return(
                            <div key={`day${i+1}`}>{i+1}</div>
                        )
                    })
                }
            </div>
        </>
    )
}