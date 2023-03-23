import React, { useContext } from 'react'
import '../styles/nav.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/makemytrip-logo.png'
import { DataAppContext } from './DataApp';
 const Nav = () => {
  const navigate = useNavigate();
const localContext = useContext(DataAppContext)
const {appState , setAppState} = localContext
const{username , loginStatus} = appState



//FOR LOGOUT
const logoutFn =() =>{
  setAppState({
    ...appState,
    loginStatus: false,
    username:""
  })
}


 const flightFn =() =>{
  navigate("/flight")
 }
 const staysFn =() =>{
  navigate("/hotel")
 }
 const trainFn =() =>{
  navigate("/train")
 }
 const loginFn =() =>{
  navigate("/login")
 }

  return (
    <>
       <div className='navbaar'>
       <img src={logo}/>

       <div className='btn'>
        <button onClick={flightFn} >flights</button>
       <button  onClick={staysFn}>stays</button>
      <button onClick={trainFn} >trains</button>
      </div> 
      <div className='inBtn'>
      {
        loginStatus ? <button >{username}</button> :<button   onClick={loginFn}>Login</button>
      }
        
      {
        loginStatus && <button  onClick={logoutFn}>logout</button>
      }
      </div>
       
       </div>
          
    </>
  )
}
export default Nav