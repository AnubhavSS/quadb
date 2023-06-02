import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({item}) => {

  return (
    <div > 
        
        <div className="card  mx-auto  my-2 bg-body-secondary overflow-hidden " style={{width: '18rem',height: '460px' }}>
  <img src={item.show.image.original} className="card-img-top img-fluid  h-50 h-lg-75 " alt="..."/>
  <div className="card-body  h-100 bg-opacity-25">
    <h5 className="card-title">{item.show.name}<span className='fst-italic fs-6'>({item.show.language})</span></h5>
    <p className="card-text mb-4 fw-semibold">{item.show.summary===""? <span>No description available</span>: item.show.summary.substring(0,100)}..</p>
    <Link to='/item' className='btn btn-primary ' state={item} >Dive in</Link>
  </div>
</div>
    </div>
  )
}

export default CardItem
