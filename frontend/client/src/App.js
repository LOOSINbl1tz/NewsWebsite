
import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import {Home} from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sports } from './components/Sports';
import { Politics } from './components/Politics';
import { Weather } from './components/Weather';
import { useEffect,useState } from 'react';
import axios from 'axios';
function App() {
  const [newsCategory, setNewsCategory] = useState([]);
  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/home/readtopics');
        console.log(response);
        const topics = response.data;
        const topicNames = topics.map(topic => topic.topic_name);
        setNewsCategory(topicNames);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error here
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Sports" element={<Sports />}/>
        <Route path="/Politics" element={<Politics />}/>
        <Route path="/Weather" element={<Weather/>}/>
        {/* {newsCategory.map((category, index) => {
            let Component =`${category}`
            console.log(Component);
              return (
                // <Route path= {`/${category}`} element={React.createElement(Component)}/>
                <Route path= {`/${category}`} element={<Sports />}/>
              )
            })} */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
