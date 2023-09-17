import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function CreateAcc() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: '',
    role:"admin"
  });

  const ragisterData = JSON.parse(localStorage.getItem('user'))

  const [data, setData] = useState(ragisterData || []);
  const [error, setError] = useState(true);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData((prev) => ({ ...prev, id: uuidv4(), [e.target.name]: e.target.value }))
  }

  const storedUser = ragisterData
  console.log(storedUser);
  const SameUserdata = storedUser?.find((user) => user.username === formData.username)
  console.log(SameUserdata);

  useEffect(() => {
    if (SameUserdata) {
      setError(true)
    } else {
      setError(false)
    }
  }, [SameUserdata]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!error) {
      setData([...data, formData])
      const userData = [...data, formData]
      localStorage.setItem("user", JSON.stringify(userData))
      setFormData({
        email: "",
        username: "",
        password: '',
        role:"admin"
      })
      navigate("/")
    } else {
      alert("Please Enter Different Username")
    }


  }
  console.log(data);
  const handleLogin = () => {
    navigate("/")
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-1 col-sm-3'></div>
          <div className=' text-center border borderd shadow col-10   col-lg-6 py-sm-3 py-lg-5 p-4'>
            <h2 className='mb-4'>Sign Up</h2>
            <div className='row'>
              <div className='col-sm-1 col-lg-2'></div>
              <div className=' col-sm-10 col-lg-8'>

                <form onSubmit={handleSubmit} >
                  <div className="form-group">
                    <input type="email" className="form-control bg-light" name='email' value={formData.email} onChange={handleChange} placeholder="Enter Email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone.</small>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control bg-light" name='username' value={formData.username} onChange={handleChange} placeholder="User Name" />
                    {error && <small className='text-danger'>username is already taken</small>}
                  </div>
                  <div className="form-group my-3">
                    <input type="password" className="form-control bg-light" name='password' value={formData.password} onChange={handleChange} placeholder="Password" />
                  </div>
                  <div className="my-4">
                    <button type='submit' className='btn btn-success  lg'>Create Account</button>
                  </div>
                </form>

                <span>Already Have An Account? <button onClick={handleLogin} className='create'>Login hear</button></span>

              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAcc
