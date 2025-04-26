import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
// import { Navigate } from 'react-router-dom'
import { Routes,Route, Navigate } from 'react-router-dom'

import { useAuth } from './context/Authprovider'
import Loading from './components/Loading'
const App = () => {
  const [authUser,setAuthUser]=useAuth();

    console.log(authUser);
   
  return (
      <Routes>
        <Route path="/" element={
          authUser ? 
          (<div className='flex h-screen '>
            <Left/>
            <Right/>
            </div>):(
           <Navigate to={"/login"}/>
            )
        }/>
          {/* <Signup/> */}
      {/* <Login/> */}
      <Route
       path="/signup"
        element={authUser ? <Navigate to="/"/> : <Signup/>}/>
      <Route 
      path="/login" element={authUser ? <Navigate to={"/"}/> : <Login/>}/>
        </Routes>
    //  < Loading/>
  
  )
}

export default App
