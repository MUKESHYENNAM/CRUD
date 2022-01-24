import React, { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import { FormControl, InputLabel, Input,makeStyles, FormHelperText, FormGroup, Typography, Button } from '@material-ui/core';
import {addUserdata} from './Service/api';
import { useHistory, useParams } from 'react-router-dom';
import {getUser} from './Service/api';
import axios from "axios";

const useStyles = makeStyles({
  container: {
    width:"50%",
    margin:'5% 0 0 25%',
   
  }
});

const initialValue = {

  first_Name:'',
  last_Name:''

}



function EditUsers() {

  const classes = useStyles();
  
  const [user, setUser] = useState(initialValue);
  const {first_Name, last_Name} = user;

  const { id } = useParams();
  //alert(id);

  const history = useHistory();

  useEffect(()=> {

      loadUserData();

  }, []);

  const loadUserData = async () =>{
    
    const response = await getUser(id);
    //console.log(response.data);
    setUser(response.data);
   
/*
   const student = await axios.get(`http://127.0.0.1:3003/students/${id}`);
   console.log(student.data);*/
    

  }


  const onValueChange = (e) =>{
  
    setUser({...user, [e.target.name]:e.target.value});
    
  }


  const editUserdataDetails = async () =>{
    await addUserdata(user);
    history.push('/stable');

  }

  return (
    <>
    
   <FormGroup className={classes.container}>
   <Typography variant='h5'>Edit-Users</Typography>
  <FormControl>
    <InputLabel>First name</InputLabel>
    <Input onChange={(e)=> onValueChange(e)} name='first_Name'/>
  </FormControl>

  <FormControl>
    <InputLabel>Last name</InputLabel>
    <Input onChange={(e)=> onValueChange(e)} name='last_Name'/>
  </FormControl>

  <FormControl>
  <Input />
  </FormControl>

  <button type="button" onClick={()=>editUserdataDetails()}  className=" py-1 btn btn-primary">Edit</button>
 
   </FormGroup>
   </>
  );
}
export default EditUsers;