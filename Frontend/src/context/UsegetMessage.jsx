import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react'
import Usecoversation from '../zustand/Usecoversation.jsx'

const UsegetMessage = () => {
  const [loading,setLoading]=useState(false);
  const {messages,setMessage,selectedConversation}=Usecoversation();
  useEffect(()=>{
    const getMessages=async()=>{
      setLoading(true);
      if(selectedConversation && selectedConversation._id){
        try{
          const res=await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessage(res.data);
          setLoading(false);
        }catch(error){
          console.log("Error is getting generated",error);
        }
      }
    }
    getMessages();
  },[selectedConversation,setMessage])
  return {loading,messages}
}

export default UsegetMessage;
