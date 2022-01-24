import React from 'react'
import {Route, BrowserRouter, Routes, Switch} from "react-router-dom";
import About from './About';
import Navbar from './components/Navbar';
import Nav from './Nav';
import Stable from './Stable';
import Error from './Error';
import AddUsers from './AddUsers';
import EditUsers from './EditUsers';




function Home() {
  return (
    <>
    <Navbar />
   
    <Switch>
      <Route exact path='/'component={About} />
      <Route exact path='/stable'  component={Stable} />
      <Route path='/addusers' component={AddUsers}/>
      <Route path='/edit/:id' component={EditUsers} />
    
      <Route component={Error}/>
    </Switch>
  
      
    </>
    );
}
export default Home;
