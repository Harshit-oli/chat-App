import React from 'react'
import Usecoversation from '../../zustand/Usecoversation'
import { useSocketContext } from '../../context/SocketContext';

const User = ({user}) => {
  const {selectedConversation,setSelectedConversation}=Usecoversation();
  const isSelected=selectedConversation?._id===user?._id;
  const {socket,onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(user._id);
  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-slate-700":""}`} onClick={()=>setSelectedConversation(user)}>
      <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300'>
      <div className={`avatar ${isOnline ? "online" : ""}`}>
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
   <div> 
    <h1 className='font-bold'>{user.fullname}</h1>
   <p>{user.email}</p>
   </div>
      </div>
    </div>
  )
}

export default User
