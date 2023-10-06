import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()


  const [loginData, setLogindata] = useState({
      username: "",
      password: ""
  });

  const handleChange = (e) => {
      setLogindata((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const finduser = storedUser.find((user) =>  user.username === loginData.username && user.password === loginData.password)
      if (finduser) {
          localStorage.setItem("login", JSON.stringify(finduser))
          navigate(`/dashbord/admin`)

      } else {
          alert("Invalid Credentials")
          console.log("Invalid Credentials");
      }
  }

  const handlesignup = () => {
    navigate("createaccount")
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-1 col-sm-1 col-md-2'></div>
          <div className=' text-center border borderd shadow col-10  col-sm-10 col-md-8 py-sm-3 py-md-5 p-4'>
            <h2 className='mb-4'>Sign In</h2>
            <div className='row'>
              <div className='col-sm-1 col-md-2'></div>
              <div className='col-sm-10 col-md-8'>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control bg-light" name='username' value={loginData.username} onChange={handleChange} placeholder="User Name" required/>
                  </div>
                  <div className="form-group my-3">
                    <input type="password" className="form-control bg-light" name='password' value={loginData.password} onChange={handleChange} placeholder="Password" required/>
                  </div>
                  <div className="my-4">
                    <button type='submit' className='btn btn-success  lg'>Sign In</button>
                  </div>
                </form>

                <span>Don't Have An Account? <button onClick={handlesignup} className='create'>Create Account</button></span>

              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Login
