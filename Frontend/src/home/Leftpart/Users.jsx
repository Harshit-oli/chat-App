import React from 'react'
import User from './User'
import UsegetAllUsers from '../../context/UsegetAllUsers'

const Users = () => {
  const [allUsers,loading]=UsegetAllUsers();
  console.log(allUsers);
  console.log(Array.isArray(allUsers));
  return (
    <div>
      <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>
        Messages
      </h1>
      <div className=" py-2 flex-1 overflow-y-auto" 
      style={{maxHeight: "calc(84vh - 10vh)"}}>
        
     {
    allUsers.map((user,index) => (
      // console.log('User Item:', item); // Debugging line
     <User user={user} key={index}/>
     ))
      }
            
      </div>
    </div>
  );
}

export default Users
