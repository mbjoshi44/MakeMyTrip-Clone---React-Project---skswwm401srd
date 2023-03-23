import React ,{useEffect, useState}from 'react'
import '../styles/flight.css';
import '../styles/apifetch.css';
import { ColorRing } from 'react-loader-spinner';
import Checkout from './checkout';

const Flight = () => {

const[data ,setdata]  = useState([])
const [loader, setLoader] = useState(false);

    const popUp = (index) => {
        let list = [...data]
        list[index].isMb = !list[index].isMb
        setdata(list)
       
    }

  const getApi = async () => {
    setLoader(true)

    const response = await fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights");
    const data = await response.json();


    setTimeout(() => {
      data.map((item) => [
          item.isMb = false
      ])
      setdata(data);
      setLoader(false)

  }, 1000)

}
useEffect(() => {
      getApi();
      console.log(data)
}, []);

  return (
    <>
    <div className='newMain'>
      <div className='flight'>
        Trip type:<select>
          <option value="oneway">oneway</option>
          <option value="return">return</option>
        </select>
      </div>

      <div className='fromm'>
        <span>
        FROM <br /><select>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>

          </select>
        </span>
        <span>
          To <br /><select>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>

          </select>

        </span>
        <span>DEPARTURE <br />  <input type="date" /></span>

        <span>RETURN <br />  <input type="date" /></span>
    
      </div> 
      <div className='btn2'>    
        <button >Search</button>         
         </div>  
         </div>


          <div>
          {loader ? <div style={{ marginLeft: "720px" }}><ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
                </div> :
                data.map((item, index) => (
                    <div key={index} className="ApiContentOuter">
                        <div className='ApiContentInner'>
                            <div className="From">
                                <span>FROM:</span>  <p className="font">{item.from}</p>
                                <span> TO:</span>  <p className="font">{item.to}</p>
                                <span>AirLine:</span>  <p className="font">{item.airlineName}</p>
                            </div>
                            <div className="Departure">
                                <span>DEPARTURE:</span>  <p>{item.departure.departureTime}</p>
                                <span>RETURN:</span>  <p>{item.return.returnTime}</p>
                                

                            </div>
                            <div className="price">
                                <span>Price:</span><p id="rupees"><b> &#8377; {item.price}</b></p>
                                <span>Via:</span>  <p>{item.via}</p>
                                <span>Duration:</span>  <p>{item.duration}</p>
                            </div>
                            <div className="BookBtn">
                                <button   onClick={() => popUp(index)} >BOOK NOW</button>
                                {
                                     item.isMb && <Checkout setdata={setdata} index={index} data={data} modelData={item}  fakeString="flight"/>
                                    } 
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}
export default Flight
