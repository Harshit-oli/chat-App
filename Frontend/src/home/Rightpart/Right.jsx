import React, { useEffect } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './TypeSend'
import Usecoversation from '../../zustand/Usecoversation'
import { useAuth } from '../../context/Authprovider'

const Right = () => {
  const {selectedConversation,setSelectedConversation}=Usecoversation()
  useEffect(()=>{
    return setSelectedConversation(null)
  },[setSelectedConversation]);
  return (
    <div className=' bg-slate-900 text-gray-300 w-[70%]'>
    <div>
      {!selectedConversation?(<NoChatSelected/>):(<>
      <ChatUser/>
      <div className='flex-1 overflow-y-auto' style={{ minHeight: "calc(92vh - 8vh)" }}>
      <Messages/>
      </div>
      <TypeSend/>
      </>
    )}
    </div>
    </div>
  )
}

export default Right;

const NoChatSelected=()=>{
  const [authUser]=useAuth()
  return(
    <>
    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-center'>
        Welcome <span className='font-semibold text-xl'>{authUser.user.fullname}</span>
        <br/>
        No chat selected,please start conversation by selecting anyone to your contacts
      </h1>
    </div>
    </>
  )
}
