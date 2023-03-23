import React, { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import Checkout from './checkout';
const Hotel = () => {
  const [data, setdata] = useState([]);
    const [loader, setLoader] = useState(false);
    const popUp = (index) => {
      let list = [...data]
      list[index].isMb = !list[index].isMb
      setdata(list)
     
  }

    //CALLING  API
    const getApi = async () => {
      setLoader(true)
      const response = await fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels");
      const data = await response.json();

      setTimeout(() => {
       data.map((item)=>[
          item.isMb=false
       ])
          setdata(data);
          setLoader(false)
      },1000)   
  }
  useEffect(() => {
      getApi();
  }, []);

  return (
    <>
    <div className='newMain'>
      <div className='flight'>
        Room type:<select>
          <option value="oneway">Single</option>
          <option value="return">Souble</option>
        </select>
      </div>

      <div className='fromm'>
        <span>
           CITY, OR LOCATION<br /><select>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>

          </select>
        </span>
       
        <span>CHECK-IN <br />  <input type="date" /></span>

        <span>CHECK-OUT <br />  <input type="date" /></span>
        <span>guestis <br />  <input type="number" /></span>
    
      </div> 
      <div className='btn2'>    
        <button >Search</button>         
         </div>  
         </div>



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
                                    <span>HOTEL:</span>  <p className="font">{item.hotel_name}</p>
                                    <span> CITY</span>  <p className="font">{item.city}</p>
                                    <span>RATING</span>  <p className="font">{item.rating} / 10</p>
                                </div>
                                <div className="Departure">
                                    <span>Check-IN:</span>  <p>{item.check_in}</p>
                                    <span>CHECK-OUT:</span>  <p>{item.check_in}</p>
      
                                </div>
                                <div className="price">
                                    <span>Price:</span><p id="rupees"><b> &#8377; {item.price_per_night} Per night</b></p>
                                    <span>Room</span>  <p>{item.room_type}</p>
                                    <span>Guest</span>  <p>{item.guests}</p>
                                </div>
                                <div className="BookBtn"> <button   onClick={() => popUp(index)} >BOOK NOW</button>
                                {
                                     item.isMb && <Checkout setdata={setdata} index={index} data={data} modelData={item}  fakeString="hotel"/>
                                    } </div>
                               
                            </div>
                        </div>
                    ))
                }

        
    </>
  )
}
export default Hotel
