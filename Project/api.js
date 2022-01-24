import axios from "axios";
import React from 'react'



const url = "http://localhost:3003/students";

export const getUser = async(id) =>{

    id = id || '';
    
    return await axios.get(`${url}/${id}`);

}



export const addUserdata = async(user) =>{

    return await axios.post(url, user);

}

export const deleteData = async(id)=>{
    return await axios.delete(`${url}/${id}`);
}


