import React, { createContext, useContext, useState } from 'react'
import Cookies from "js-cookie" 
import User from '../home/Leftpart/User';

export const AuthContext=createContext();
export const AuthProvider = ({children}) => {
    const initialUserState=Cookies.get("jwt") || localStorage.getItem("chatApp");

    //parse the user data and storing in state
    const [authUser,setAuthUser]=useState(initialUserState ? JSON.parse(initialUserState):undefined);
  return (
   <AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
   </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext);
