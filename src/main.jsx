import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './Button.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
    <Button text="Button 1"></Button>
    <Button text="Button 2"></Button>
    <Button text="Button 3"></Button>
  </>
)