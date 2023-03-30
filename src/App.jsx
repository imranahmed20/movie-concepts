import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './Component/Header/Header'
import Context from './Component/Context/Context';
import Movies from './Component/Movies/Movies';
import Cart from './Component/Cart/Cart';
import Movie from './Component/Movie/Movie';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <div className='main row'>
        <div className='col-md-9'>
          <Movies></Movies>
        </div>
        <div className='col-md-3 card mt-3'>
          <Cart ></Cart>
        </div>
      </div>


      <Context></Context>
    </div>
  )
}

export default App
