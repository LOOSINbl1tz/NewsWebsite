import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const Navbar = () => {
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


    

  console.log(newsCategory);
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary h-10">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
      {/* <span className="navbar-toggler-icon"></span> */}
    {/* </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className='dropdown-menu'>
            {newsCategory.map((category, index) => {
              return (
                <li key={index}>
                  <Link className="dropdown-item" to={`/${category}`}>{category}</Link>
                </li>
              )
            })}
          </ul>

          {/* <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Topstories">Top Stories News</Link></li>
            <li><Link className="dropdown-item" to="/Weather">Weather</Link></li>
            <li><Link className="dropdown-item" to="/Economy">Economy</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>

            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">More</a></li>

          </ul> */}
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
