import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import Checkout from './checkout';
 const Train = () => {

  const [data, setdata] = useState([]);
  const [loader, setLoader] = useState(false);

  const popUp = (index) => {
    let list = [...data]
    list[index].isMb = !list[index].isMb
    setdata(list)
   
}


  const getApi2 = async () => {
      setLoader(true)
      const response = await fetch("https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains");
      const data = await response.json();
      setTimeout(() => {
        setdata(data);
          setLoader(false)
      }, 1000)
  }
  useEffect(() => {
      getApi2();
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
        <span>TRAVEL DATE <br />  <input type="date" /></span>

        <span>
          class <br /><select>
            <option value="all">ALL</option>
            <option value="1a">1A</option>
            <option value="2a">2A</option>
            <option value="3a">3A</option>
            <option value="sl">SL</option>

          </select>
           </span>
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
            /></div> :
                data.map((item, index) => (
                    <div key={index} className="ApiContentOuter">
                        <div className='ApiContentInner'>
                            <div className="From">
                                <span>FROM:</span>  <p className="font">{item.from}</p>
                                <span> TO:</span>  <p className="font">{item.to}</p>

                            </div>
                            <div className="Departure">
                                <span>DEPARTURE:</span> <b><p>{item.departure.departureTime} | {item.departure.departureTime}</p></b>
                                <span>TRAIN NUMBER:</span><b><p>{item.train_number}</p></b>
                                
                            </div>
                            <div className="price">
                                <span>Price:</span><p id="rupees"><b> &#8377; {item.price}</b></p>
                                <span>KILOMETERS</span>  <p><b>{item.kilometers} Km</b></p>
                                <span>Duration:</span> <b><p>{item.duration}</p></b>
                            </div>
                            <div className="BookBtn"> <button   onClick={() => popUp(index)} >BOOK NOW</button>
                            {
                                     item.isMb && <Checkout setdata={setdata} index={index} data={data} modelData={item}  fakeString="train"/>
                                    }
                             </div>
                        </div>
                    </div>
                ))
            }  






        
    </>
  )
}
export default Train