import React, {useState} from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({name:"", email:"", password:"", geolocation:""})

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("https://mern-food-r56k.vercel.app/api/createuser", {
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name:credentials.name,
        email:credentials.email,
        password:credentials.password,
        location:credentials.geolocation
      })
    });
    const json = await response.json();
    console.log(response);
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials')
    }
    setCredentials({name:"", email:"", password:"", geolocation:""})
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  return (
    <>
    <div className="container">
      <form className="mt-3 mb-5" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="geolocation" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
      </form>
      </div>
    </>
  )
}

export default Signup;
