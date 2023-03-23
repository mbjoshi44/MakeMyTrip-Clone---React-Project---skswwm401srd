import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import '../styles/App.css';
import  Nav  from './nav';
import  Flight from './flight';
import  Train  from './train';
import  Hotel  from './hotel';
import  Login  from './login';
import  Registration  from './registration';
import Checkout  from './checkout';
import DataApp from './DataApp';

const App = () => {


  return (
    <div id="main">
    <BrowserRouter>
    <DataApp>
         <Nav/>
          <Routes>
            
            <Route path='/flight' element={<Flight/>} />
            <Route path='/' element={<Flight/>} />  
            <Route path='/train' element={<Train />} />
            <Route path='/hotel' element={<Hotel />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<Checkout />} /> 
           <Route path='/reg' element={<Registration />} />
          </Routes>
          </DataApp>
        </BrowserRouter>

    </div>
  )
}


export default App;
