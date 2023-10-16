
import './App.css';
import { Navbar } from './components/Navbar';
// import { Home } from './components/Home';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Router> */}
    <Navbar/>
    {/* <Home/> */}
    {/* <Switch>
    <Route path="/">
            <Home />

          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/users">
            <Users />
          </Route>
          
          </Route>
        </Switch>
    </Router> */}
    </>
  );
}

export default App;
