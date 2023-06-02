import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const ItemDetails = () => {
       
    let {state}=useLocation()
   
    
  return (
    <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80")' ,overflow:'hidden' ,width:'100% ',height: '100vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>

<div className="card my-auto bg-warning p-2 text-light bg-opacity-10 " style={{maxwidth: '540px'}}>
  <div className="row g-0 ">
  <div className="col-md-4 d-flex align-items-center">
  <img src={state.show.image.original} className="img-fluid rounded-start " alt="..."  />
</div>
    <div className="col-md-8">
   
      <div className="card-body">
        <h5 className="card-title fs-1 ">{state.show.name} <span className='fst-italic fs-4'>({state.show.language})</span><span className={`fst-italic ${state.show.status==="Ended"? 'text-danger':'text-success'} fs-6`}>{" "}{state.show.status}</span></h5>
       
       { state.show.genres.map(val=>
        <p className="card-text fw-semibold d-inline-flex p-2" key={val}>{val}</p>
       )}
        <p className='fw-bold mx-2'>Rating: {state.show.rating.average}/10</p>
      
       <div className='d-flex p-2 mx-auto'>
        <p className='fw-bold me-2'>Score: {state.score} </p>
       <p className='fw-bold mx-2'>Runtime: {state.show.runtime} min</p>
       <p className='fw-bold mx-2'>Premiered: {state.show.premiered} </p></div>
        <p className="card-text font-monospace">{state.show.summary===""?<span>No description available</span>: state.show.summary}</p>

        <div className='d-flex p-2 mx-auto'>
        <p className='fw-bold me-2'>Country: {state.show.network? state.show.network.country.name:"Not available"} </p>
       <p className='fw-bold mx-2'>Network: {state.show.network? state.show.network.name:"Not available"}</p>
      </div>

     <Link to={state.show.network? state.show.network.officialSite:"Not available"} className='text-decoration-none text-light fw-bold mx-2'> <p >Official Site: <span className='text-warning'> {state.show.network? state.show.network.officialSite:"Not available"}</span></p></Link>
      
      <div className='fw-bolder fs-6 mx-2'> Days:
      { state.show.schedule.days.map(val=>
        <p  className="card-text fw-semibold d-inline-flex p-2" key={val}>{val}</p>
       )}
       </div>
        <p className='fw-bold mx-2'>Time: {state.show.schedule.time?state.show.schedule.time:"Not available"}</p>
        {localStorage.getItem('user')?
<Link to='/book' state={state.show}> <button className='btn btn-danger'>BOOK</button></Link>:
<p className='fw-bolder fs-4 mx-2 text-warning'>Please Login to book</p>
}

      </div>
    </div>
  </div>

</div>


    </div>
  )
}

export default ItemDetails
