import React from 'react'
import { useLocation,Link } from 'react-router-dom'
const Book = () => {
    let {state}=useLocation()
    console.log(state)
  return (
    <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80")'  ,width:'100% ',height: '100vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        
       <div className="card mx-auto   p-3  bg-light bg-opacity-75" style={{width:"20rem"}}>
  <div className="card-body">
    <h5 className="card-title text-center fw-bolder">Booking Details</h5>
    <p className="card-text text-center fst-itali fw-medium fs-6">Booking ID: #{Math.floor(Math.random()*1000000)}</p>
    <p className="card-text text-center fst-itali fw-medium fs-6">Username : {JSON.parse(localStorage.getItem('user')).name}</p>
   <p className="card-text text-center fw-bold fs-4"> {state.name}</p>
   <p className="card-text text-center fw-medium fs-5"> ({state.language})</p>
    <p className="card-text text-center fw-medium fs-5">Runtime: {state.runtime} min</p>
    <p className="card-text text-center fw-medium fs-5">Timing: {state.schedule.time} </p>
    <p className='card-text text-center fw-medium fs-5'>Day:</p>
    <select className="form-select w-50 mx-auto" aria-label="Default select example">
  <option >Open this to select Day</option>
  { state.schedule &&  state.schedule.days.map(val=>
  <option key={val} value={val}>{val}</option>
  ) 
}
</select>

  </div>
  <Link to='/' className='btn btn-primary p-1 w-auto mx-auto align' >Proceed</Link>
</div>
        
        </div>
  )
}

export default Book
