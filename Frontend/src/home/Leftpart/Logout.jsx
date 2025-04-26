import React from 'react'
// import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import Cookies from "js-cookie"
import axios from 'axios';
import { useState } from 'react';



const Logout = () => {
  const [loading,setLoading]=useState(false);
  const handleLogout=async()=>{
    setLoading(true);
    try {
      const res=await axios.post("/api/user/logout");
      localStorage.removeItem("chatApp");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logged out successfully")
      
    } catch (error) {
      console.log("Error in logout",error);
      
    }
  }
  return (
<div className="h-[10vh]">
<div>
<BiLogOutCircle className='text-5xl text-white hover:bg-slate-700 duration 300 cursor-pointer rounded-full p-2 ml-2'
  onClick={handleLogout}/>
</div>
</div>
  )
}

export default Logout
