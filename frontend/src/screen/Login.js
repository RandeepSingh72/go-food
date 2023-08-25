import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({email:"", password:""});
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("https://go-food-liard.vercel.app/api/loginuser", {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email:credentials.email,
        password:credentials.password
      })
    });
    const json = await response.json();
    console.log(response);
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials')
    }
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem('authToken', json.authToken)
      navigate('/')
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }
  return (
    <div className="container">
    <form className="mt-3 mb-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
        <div id="emailHelp" className="form-text text-white">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Login
      </button>
      <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>
    </form>
    </div>
  )
}

export default Login;
