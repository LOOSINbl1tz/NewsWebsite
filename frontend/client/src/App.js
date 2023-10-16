
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <h1>This is iNotebook</h1>
    </>
  );
}

export default App;
