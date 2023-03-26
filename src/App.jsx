import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heder from './COMPONENT/HEDER/Heder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Heder></Heder>
    </div>
  )
}

export default App
