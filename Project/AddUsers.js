import React, { useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import { FormControl, InputLabel, Input,makeStyles, FormHelperText, FormGroup, Typography, Button } from '@material-ui/core';
import {addUserdata} from './Service/api';
import { useHistory } from 'react-router-dom';

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




function Working(){
  alert("Working")
}

function AddUsers() {
  const classes = useStyles();
  
  const [user, setUser] = useState(initialValue);
  const {first_Name, last_Name} = user;

  const history = useHistory();


  const onValueChange = (e) =>{
  
    setUser({...user, [e.target.name]:e.target.value});
    
  }


  const addUserdataDetails = async()=>{
    await addUserdata(user);
    history.push('/stable');

  }

  return (
    <>
    
   <FormGroup className={classes.container}>
   <Typography variant='h5'>Add-Users</Typography>
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


  <button type="button" onClick={addUserdataDetails}  className=" py-1 btn btn-primary">Edit</button>
 
   </FormGroup>
   </>
  );
}
export default AddUsers;