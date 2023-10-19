
import './App.css';

import { Navbar } from './components/Navbar';
import { About } from './components/About';
import {Home} from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sports } from './components/Sports';
import { Economy } from './components/Economy';
import { Topstories } from './components/Topstories';
import { Weather } from './components/Weather';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Sports" element={<Sports />}/>
        <Route path="/Economy" element={<Economy />}/>
        <Route path="/Topstories" element={<Topstories />}/>
        <Route path="/Weather" element={<Weather />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
