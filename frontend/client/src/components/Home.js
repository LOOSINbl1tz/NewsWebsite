import React from 'react'
import sports2 from './images/sports2.jpg'
import politics22 from './images/politics22.jpg'
import weather22 from './images/weather22.jpg'



import sports from './images/sports.jpg'
// import {politicsimage} from './images/politicsimage.jpg'
import politicsimage from './images/politicsimage.jpg'
import weatherimage from './images/weatherimage.jpg'



import { Link } from 'react-router-dom'
import { Politics } from './Politics'
import { Weather } from './Weather'


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
      <img src={sports2} className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={politics22} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={weather22} className="d-block w-100" alt="..."/>
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
  <img className="w-100 h-50" src={sports} alt="Card cap"/>
  <div className="card-body">
  <Link className="btn btn-info" to="/Sports" role="button">Sport</Link>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div className="card-footer">
    <small className="text-muted">Last updated 3 mins ago</small>
  </div>
</div>

<div className="card m-2 shadow p-3 mb-5 bg-white rounded"> 
  <img className="w-100 h-50" src={politicsimage} alt="Card cap"/>
  <div className="card-body">
  <Link className="btn btn-info" to="/Politics" role="button">Politics</Link>
    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div className="card-footer">
    <small className="text-muted">Last updated 3 mins ago</small>
  </div>
</div>

<div className="card m-2 shadow p-3 mb-5 bg-white rounded">
  <img className="w-100 h-50" src={weatherimage} alt="Card cap"/>
  <div className="card-body">
  <Link className="btn btn-info" to="/Weather" role="button">Weather</Link>
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
