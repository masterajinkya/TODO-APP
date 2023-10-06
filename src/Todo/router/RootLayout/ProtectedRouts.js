import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children, allowedRoles}) {
    const storedUser = JSON.parse(localStorage.getItem("login"));

    let auth ={role:storedUser.role};
    console.log(auth);
  return (
    <>
      {auth.role === allowedRoles ? children : <Navigate to='/' replace/>}
    </>
  )
}

export default ProtectedRoute
