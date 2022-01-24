import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react'
import Table from '@material-ui/core/Table';
import {getUser, deleteData} from './Service/api';
import { useEffect, useState } from 'react';
import { TableBody, Button, makeStyles, TableCell, TableHead, TableRow} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import EditUsers from './EditUsers';


const useStyles = makeStyles({
    root: {
      background: 'white',
     width:'90%',
     margin:'50px 0 0 50px'
     
    },
    text:{
        textAlign:'center'
        
    },
    thead:{
        '& > *':{
            background:'green',
            fontSize:'25px',
            color:'white'
            
        }     
    },


    tdata:{
        '& > *':{
            fontSize:'25px',
            color:'black'
            
        }     
    }


});
  

 function Stable (){

    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => { 

        getAllUsers();

        }, []);

    const getAllUsers = async() =>{
        const response = await getUser();
        console.log(response.data);
        setUsers(response.data);

    }

    const deleteUserData = async(id)=>{
        await deleteData(id);
        getAllUsers();

    

    }
   

     return(
         <>
         <h1 className={classes.text}>Student Table</h1>
       
         <Table className={classes.root}>
             <TableHead>
             <TableRow className={classes.thead}>
                <TableCell >ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
             
             </TableRow>
             </TableHead>
             <TableBody>
                 {
                     users.map(students => {
                         return(
                    <TableRow className={classes.tdata}> 
                        <TableCell>{students.id}</TableCell>
                        <TableCell>{students.first_Name}</TableCell>
                        <TableCell>{students.last_Name}</TableCell>
                        <TableCell>
 
                        <button type="button" className="btn btn-primary" >
                        <NavLink exact activeClassName='active_class' to={`/edit/${students.id}`}>Edit</NavLink>
                        </button>

                        
                       {/*  <button type="button" className="btn btn-primary" component={NavLink} to={`/edit/${students.id}`}>Edit</button>
                        */}</TableCell>
                        <TableCell>
                        <button type="button" className="btn btn-danger" onClick={()=>deleteUserData(users.id)}> Delete</button>
                        </TableCell>
                    </TableRow>
                    );

                     })
                    }
             </TableBody>
         </Table>
    

         
         </>

     );
 }
 export default Stable;