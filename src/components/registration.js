import React, { useState ,useEffect}  from "react";

import '../styles/login.css';
import {Link, useNavigate } from "react-router-dom";
function Registration(){
    
  const initialData = {
    username: '',
    password: '',
}
const [formdata, setFormdata] = useState(initialData);
const [status, setStatus] = useState(false);

    const navigate = useNavigate();
  


    // ONCHANGE STORE DATA IN USESTATE VARIABLE
    const updateData = (e) => {
      console.log(e.target.id, e.target.value);
      let tempObj = {};
      tempObj[e.target.id] = e.target.value.trim();
      setFormdata({
          ...formdata, ...tempObj
      });
  }

  
    //methods for form submission button
    const registerFn = () => {
      //form submiited
      setStatus(true);
      //call api for form submission - POST - Submit Data - formdata/localstorage
      let temp = JSON.parse(localStorage.getItem('users')) || [];
      localStorage.setItem('users', JSON.stringify([...temp, formdata]));
      //store the response in a state variable
      setFormdata(initialData);
      navigate("/login")
}

useEffect(() => {
  let temp = localStorage.getItem('users');
  console.log(JSON.parse(temp));
}, [status])

    return(
       <>
            <br />
        <br /> <br />
        <br /> <br />
        <br />
            <div className="form">
            
            
            Username: <input type="text" id="username" onChange={updateData} value={formdata.username} /><br></br>

Password: <input type="password" id="password" onChange={updateData} value={formdata.password} /><br></br><br></br>


        <br />
        <br />
        <button onClick={registerFn} type="submit">Register</button>
        <br />
        <br />
        <br />
       
          Already Have An Account?<Link to={"/login"}><button type="submit" > Please Login</button></Link>
       
      
                
                
            </div>
       </>
    )
}

export default Registration