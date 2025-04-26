import React from 'react'
import Usecoversation from '../../zustand/Usecoversation'
import { useSocketContext } from '../../context/SocketContext';

const ChatUser = () => {
  const{selectedConversation}=Usecoversation();
  console.log(selectedConversation);
  const {onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(selectedConversation._id);
  const getOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId) ? "online":"offline";
  };
  return (
    <div className='flex space-x-3 justify-center h-[8vh] items-center bg-gray-800 hover:bg-gray-700 duration-300'>
       <div className={`avatar ${isOnline ? "online" : ""}`}>
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div>
<div>{selectedConversation.fullname}</div>   
{/* {selectedConversation.fullname} */}
<span>{getOnlineUsersStatus(selectedConversation._id)}</span>
</div>
    </div>
  )
}

export default ChatUser
