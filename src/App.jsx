import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heder from './COMPONENT/HEDER/Heder'
import Shop from './COMPONENT/SHOP/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Heder></Heder>
      <Shop></Shop>
    </div>
  )
}

export default App
