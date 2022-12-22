import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Stocks from './pages/Stocks';
import Price from './pages/Price';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />
        <Route path='/stocks' element={<Stocks />} />
        <Route path='/stocks/:symbol' element={<Price />} />
      </Routes>
      {/* <footer>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        </ul>
      </footer> */}
    </div>
    
  );
}


export default App;
