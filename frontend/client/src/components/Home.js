import React from 'react'
import nature from './images/nature.jpg'
import space from './images/space.jpg'
import tajmahal from './images/tajmahal.jpg'

import warimage from './images/warimage.jpg'
import weatherimage from './images/weatherimage.jpg'
import economy from './images/economy.jpg'
import sports from './images/sports.jpg'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
   <>
{/* ------------------------- This is carousel ------------------------------------------------ */}
   

<div id="carouselExampleCaptions" className="carousel slide m-2 rounded " > 
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner rounded">
    <div className="carousel-item active">
      <img src={nature} className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={space} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={tajmahal} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



{/* ------------------------------end of carousel --------------------------------------------------- */}



{/* --------------------------------------This is card --------------------------------------------------- */}

<div className="card-group ">

<div className="card m-2 shadow p-3 mb-5 bg-white rounded">
  <img className="w-100 h-50" src={warimage} alt="Card cap"/>
  <div className="card-body">
  <Link className="btn btn-info" to="/Topstories" role="button">Top Storie News</Link>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div className="card-footer">
    <small className="text-muted">Last updated 3 mins ago</small>
  </div>
</div>

<div className="card m-2 shadow p-3 mb-5 bg-white rounded"> 
  <img className="w-100 h-50" src={weatherimage} alt="Card cap"/>
  <div className="card-body">
  <Link className="btn btn-info" to="/Weather" role="button">Weather</Link>
    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div className="card-footer">
    <small className="text-muted">Last updated 3 mins ago</small>
  </div>
</div>

<div className="card m-2 shadow p-3 mb-5 bg-white rounded">
  <img className="w-100 h-50" src={economy} alt="Card cap"/>
  <div className="card-body">
  <Link className="btn btn-info" to="/Economy" role="button">Economy</Link>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
  </div>
  <div className="card-footer">
    <small className="text-muted">Last updated 3 mins ago</small>
  </div>
  
</div>


<div className="card m-2 shadow p-3 mb-5 bg-white rounded">
  <img className="w-100 h-50" src={sports} alt="Card cap"/>
  <div className="card-body">
  <Link className="btn btn-info" to="/Sports" role="button">Sports</Link>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
  </div>
  <div className="card-footer">
    <small className="text-muted">Last updated 3 mins ago</small>
  </div>
  
</div>
</div>




{/* ---------------------------- End of Card ------------------------------------- */}

   </>
  )
}
