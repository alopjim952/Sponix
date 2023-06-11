import React, {useContext} from 'react'
import {useSelector} from 'react-redux'
import { AuthContext } from '../context/SponixContext'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {
  const {user} = useSelector((state) => state.auth);
  
  console.log(user);
  if(user){
    return children
  } else {
    return <Navigate to={'/'}></Navigate>
  }
}
