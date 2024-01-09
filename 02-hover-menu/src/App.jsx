import './App.css'
import { Calendar } from './components/Calendar/Calendar.jsx'
import { HoverMenu } from './components/HoverMenu/HoverMenu.jsx'

function App() {

    return (
      <div className="container">
        <HoverMenu>
          <Calendar dayStart={3} daysNumber={31} month={"Enero"}></Calendar>
        </HoverMenu>
      </div>
    )
}

export default App


