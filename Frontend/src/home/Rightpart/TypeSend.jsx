import React,{useState} from 'react'
import { IoSendSharp } from "react-icons/io5";
import UsesendMessage from '../../context/UsesendMessage.jsx';


const TypeSend = () => {
  const [message,setMessage]=useState("")
  const {loading,sendMessages}=UsesendMessage();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex gap-28 h-[8vh] text-center'>
     <div className=" w-[70%]">
        <input type="text"
         placeholder="Type here"
         value={message}
         onChange={(e)=> setMessage(e.target.value)}
        className="border border-gray-700 w-full ml-24 outline-none p-3 rounded-md" />
        </div>
     <button>
        <IoSendSharp className='text-3xl' />
     </button>
    </div>
    </form>
  )
}

export default TypeSend
