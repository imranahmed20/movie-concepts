import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './Component/Header/Header'
import Context from './Component/Context/Context';
import Movies from './Component/Movies/Movies';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Movies></Movies>
      <div>
        <Context></Context>
      </div>
    </div>
  )
}

export default App
