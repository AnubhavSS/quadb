import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('user')
    navigate("/")
  }
  
  return (
    <div>

<nav className="navbar bg-dark   ">
  <div className="container-fluid "  >
    <Link className="navbar-brand text-warning" to='/'>
 Home
    </Link>
    
    { localStorage.getItem("user")? <button className='btn btn-success' onClick={handleLogout} >Logout</button>:
    <Link className='btn btn-success bi bi-door-open' to='/login' >Login</Link>
}
  </div>
  
</nav>
    </div>
  )
}

export default Navbar
