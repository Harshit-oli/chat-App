import React, { useEffect,useRef} from 'react';
import Message from './Message';
import UsegetMessage from '../../context/UsegetMessage.jsx';
import Loading from "../../components/Loading.jsx"

const Messages = () => {
  const { loading, messages } = UsegetMessage();
  console.log(messages);
  const lastMsgRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior:"smooth"});
      }
    },100)
  },[messages]);
  
  return (
    <div className="flex-1 overflow-y-auto" 
    style = {{ maxHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading/>
      ) :  (
        messages  && messages.length > 0 &&
           messages.map((message)=>(
           <div key={message._id} ref={lastMsgRef}>
            <Message message={message}/>
           </div>
        )))
      }
      {!loading && messages  && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">Say! hi to start the conversation</p>
        </div>
      )}
    </div>
  );
};

export default Messages;