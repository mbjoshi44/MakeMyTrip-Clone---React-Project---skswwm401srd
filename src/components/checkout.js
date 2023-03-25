import React,{useContext, useState} from 'react'
import { DataAppContext } from "./DataApp";
import {  useNavigate } from "react-router-dom";

import '../styles/checkout.css';
 const Checkout = ({setdata,data,modelData,index,fakeString}) => {

const localContext = useContext(DataAppContext);
const{appState , setAppState} = localContext;
const{username , loginStatus} = appState;
const navigate = useNavigate();
  const cancel = ()=>{
    let list = [...data]
    list[index].isMb = !list[index].isMb
    setdata(list)       
     }
const [success, setSuccess] = useState(false);
  if(!loginStatus){
    navigate('/login')
  }

  return (
    <>
      <div className='modalCss'>
                <div className='MMTmodal'>
                  {success  &&  <h3 style={{textAlign:"center",marginTop:"10px",}}> Payment Successfull</h3>}
                        <div><h3 style={{textAlign:"center"}}>Fare Summary </h3></div>
                    <div className='Fare'>
                        <div className='baseFare'>
                            <div ><b>Base Fare </b></div>
                            <div id='numbers'>&#8377;{fakeString==="train" && modelData.price}{fakeString==="hotel" && modelData.price_per_night}{fakeString==="flight" && modelData.price}</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"20px"}}><b>Fee & Surcharges</b></div>
                            <div style={{marginRight:"20px"}}>&#8377;540</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"5px"}}><b>Total Amount</b></div>
                            <div id='numbers'>&#8377;{fakeString==="train" && parseInt(modelData.price)+parseInt(540)}{fakeString==="flight" && parseInt(modelData.price)+parseInt(540)}{fakeString==="hotel" && parseInt(modelData.price_per_night)+parseInt(540)}</div>
                        </div>
                    </div>
                    <div><h3 style={{textAlign:"center"}}>Payment Method </h3></div>
                    <div className='PaymentInput'>
                        <input type="text" placeholder='Name on Card' />
                    </div>
                    <div className='PaymentInput'>
                        <input type="number" placeholder='Card Number' />
                    </div>
                    <div className='PaymentInput'>
                        <input type="date" placeholder='Expiry Date' />
                    </div>
                    <div className='PaymentInput'>
                        <input type="number" placeholder='CVV' />
                    </div>
                    <div className='btnPay'>
                        <button style={{backgroundColor:"rgb(220,53,69)"}} onClick={cancel}>Cancel</button>
                        <button onClick={()=>{setSuccess(true)}}>Pay</button>
                    </div>

                </div>
            </div>
        </>
    
  )
}
export default Checkout