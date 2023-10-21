import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
export const Weather = () => {
  const [newsData, setNewsData] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/home/readtopics/3/news/');
          setNewsData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      // <div>
      //   {newsData.map((item) => (
      //     <div key={item.article_id} className="card w-25 h-10">
      //       <div className="card-body">
      //         <h5 className="card-title">{item.news_title}</h5>
      //         <p className="card-text">{item.news_body}</p>
      //         <p className="card-text">{item.date_time}</p>
      //         <a href={item.link} className="btn btn-primary">
      //           Read More
      //         </a>
      //       </div>
      //     </div>
      //   ))}
      // </div>
  
    <div>
        {newsData.map((item) => (
          <div key={item.article_id} className="card m-4">
            <div className="card-body">
              <h5 className="card-title">{item.news_title}</h5>
              <p className="card-text">
                {item.news_body.substring(0, 50)}
                <span
                  className="collapse"
                  id={`collapse-${item.article_id}`}
                >
                  {item.news_body.substring(50)}
                </span>
              </p>
              <p className="card-text">{item.date_time}</p>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${item.article_id}`}
                aria-expanded="false"
                aria-controls={`collapse-${item.article_id}`}
              >
                Read More
              </button>
            </div><a href={item.link} className="btn btn-primary">Source</a>
          </div>
        ))}
      </div >
  
    );
}
