import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Usecoversation from '../zustand/Usecoversation';

const UsesendMessage = () => {
    const [loading,setLoading]=useState(false);
  const {messages,setMessage,selectedConversation}=Usecoversation();
    const sendMessages=async (message)=> {
        setLoading(true);
          try{
            const res=await axios.post(
              `/api/message/send/${selectedConversation._id}`,
              {message}
            );
            setMessage([...messages,res.data]);
            setLoading(false);
          }catch(error){
            console.log("Error is getting generated",error);
            setLoading(false);
        }
      };
  return {loading,sendMessages};
}

export default UsesendMessage
