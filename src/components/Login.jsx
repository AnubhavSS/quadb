import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [info, setinfo] = useState({})
    const handleChange=(e)=>{
       e.preventDefault()
        setinfo({...info, [e.target.name]: e.target.value});
    }

    const handleClick=()=>{
        localStorage.setItem('user',JSON.stringify(info));
        navigate('/')
    }

  return (
    <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80")'  ,width:'100% ',height: '100vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        
    <div className="card mx-auto w-50 p-3  bg-light bg-opacity-75" >
    <h5 className="card-title text-center fs-2 fw-bolder">Login</h5>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" name='email' onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' onChange={handleChange}/>
  </div>

</form>
<button type="submit" className="btn btn-primary mx-auto" onClick={handleClick}>Submit</button>
        </div>
        </div>
  )
}

export default Login
