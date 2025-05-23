import React,{useEffect,useState} from 'react'
import Cookies from "js-cookie"
import axios from 'axios'

const UsegetAllUsers = () => {
    const [allUsers,setAllUsers]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const getUsers=async ()=>{
            setLoading(true);
            try {
                const token = Cookies.get('jwt');
                const response=await axios.get("/api/user/allusers",{
                    credentials:"include",
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                });
                console.log('API Response:', response.data);
                setAllUsers(response.data);
                // setLoading(false);
            } catch (error) {
                console.log("error in UsegetAllUsers",error);
            } finally{
                setLoading(false);
            }
        };
        getUsers();
    },[])
  return [allUsers,loading];
}

export default UsegetAllUsers;
