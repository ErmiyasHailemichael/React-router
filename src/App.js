import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Stocks from './pages/Stocks';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />
        <Route path='/stocks' element={<Stocks />} />
        {/* <Route path='/stocks/:symbol' element={<Stocks />} /> */}
      </Routes>
    </div>
  );
}


export default App;
