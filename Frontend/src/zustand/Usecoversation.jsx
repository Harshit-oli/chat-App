import { create } from 'zustand'

const Usecoversation= create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
     set({selectedConversation}),
    message:[],
    setMessage:(messages)=>set({messages}),
}));
export default Usecoversation;
