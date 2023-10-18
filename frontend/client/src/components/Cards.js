import React from 'react'

import warimage from './images/warimage.jpg'
import weatherimage from './images/weatherimage.jpg'
import politics from './images/politics.jpg'

export const Cards = () => {
  return (
    <>
    
    <div className="card-group ">

  <div className="card m-2 shadow p-3 mb-5 bg-white rounded">
    <img className="w-100 h-50" src={warimage} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div className="card m-2 shadow p-3 mb-5 bg-white rounded"> 
    <img className="w-100 h-50" src={weatherimage} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  <div className="card m-2 shadow p-3 mb-5 bg-white rounded">
    <img className="w-100 h-50" src={politics} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>





<div className="card-group">
  <div className="card m-2 shadow p-3 mb-5 bg-white rounded">
    <img className="w-100 h-50" src={warimage} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card m-2 shadow p-3 mb-5 bg-white rounded"> 
    <img className="w-100 h-50" src={weatherimage} alt=""/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card m-2 shadow p-3 mb-5 bg-white rounded">
    <img className="w-100 h-50 " src={politics} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    </>
  )
}
