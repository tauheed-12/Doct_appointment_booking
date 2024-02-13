import React, { useState } from 'react'
import "./Slot.css"
import logo from "./doctor.jpg"
import audio from "./audiocallimage.png";
import audio1 from "./audioimagewithoutclick.png";
import clinic from "./clinicwithout touch.png"
import clinic1 from "./In-Clinic.png"
import videoimage from "./videoimagewithclick.png";
import videoimage2 from "./videowithoutclick.png";
import arrowright from "./iconimage2.jpg";
import arrowleft from "./iconimage.jpg"
import { Link } from 'react-router-dom';
export default function Slot({handle,name,specialty,address,SetSlot,slot}) {
  const[add,SetAdd]=useState(-10)
  const[hovere, Sethovere]=useState(-10)
  function handleSymbol(id){
    if(id===1){
        SetSlot("10:00")
    }
    else if(id===2){
      SetSlot("10:15")
    }
    else if(id===3){
      SetSlot("10:30")
    }
    else if(id===4){
      SetSlot("10:45")
    }
    else if(id===5){
      SetSlot("11:00")
    }
    else if(id===6){
      SetSlot("11:15")
    }
    else if(id===7){
      SetSlot("11:30")
    }
    if(add===id){
      SetAdd(-10);
    }
    else{
      SetAdd(id);
    }
}   
  const display1 = {
    display: 'flex'
  };
  
  const display2 = {
    display: 'none'
  };
  
  const [selectedImage1, setSelectedImage1] = useState(clinic);
  const [selectedImage2, setSelectedImage2] = useState(audio1);
  const [selectedImage3, setSelectedImage3] = useState(videoimage2);
  const [slot1Style, setSlot1Style] = useState(display1);
  const [slot2Style, setSlot2Style] = useState(display2);
  
  const handleclick1=()=>{
    setSelectedImage1(clinic1);
    setSelectedImage2(audio1)
    setSelectedImage3(videoimage2);
  }
  const handleclick2=()=>{
    setSelectedImage1(clinic);
    setSelectedImage2(audio)
    setSelectedImage3(videoimage2);
  }
  const handleclick3=()=>{
    setSelectedImage1(clinic);
    setSelectedImage2(audio1)
    setSelectedImage3(videoimage);
  }
  
  const handleright = () => {
    setSlot1Style(display2);
    setSlot2Style(display1);
  };
  
  const handlerleft = () => {
    setSlot1Style({
      display: 'flex'
    });
    setSlot2Style({
      display: 'none'
    });
  };
  
  
  const currentDate = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const day1 = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
  const date = currentDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });


  const formatday = new Date(currentDate);
  formatday.setDate(currentDate.getDate() + 1);
  const nextDayFormatted = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 2);
  const dayafternextday = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 3);
  const day4 = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 4);
  const day5 = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 5);
  const day6 = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });




  return (
    <div className="maincontainer">
    <div className='container'>
      <div className="profile">
        <div className="doctorimage">
          <img src={logo} alt="Doctor Image" />
        </div>
        <div className="doctordata">
          <h5 className='doctorname'>{name}</h5>
          <p className="specialty">{specialty}</p>
          {/* <Link to="/Home" className='viewprofile'>
         View Profile
      </Link> */}
        </div>  
      </div>
      <div className="appointment">
        <div className="appointdata">
          <h4 className='appointhead'>Book Appointment</h4>
           <p className='consult'>Select Your Consultation Type</p>
           <p className='fees'><b>Fees approx ₹ 500</b></p>
           <p className='feeatClinic'>(pay at clinic)</p>
        </div>
        <div className="appointpic">
        <img
            className='image1 '
            src={selectedImage1}
            alt="Appointment Pic 1"
            onClick={handleclick1}
          /> 
          <img
            className='image2'
            src={selectedImage2}
            alt="Appointment Pic 2"
            onClick={handleclick2}
          />
          <img
            className='image3'
            src={selectedImage3}
            alt="Appointment Pic 3"
            onClick={handleclick3}
          />
        </div>
       </div>
       <div className="clinic"><p className='clinichead'>Clinic Name</p>
         <div className="clinicAdress">
          <div className="point"></div>
          <p>{address}</p>
         </div>
        </div>
       
         <div className="slot">
         <img src={arrowleft} alt="Today" style={{ width: '30px',height:'30px' }} onClick={handlerleft} />
         <div className="slot1" style={slot1Style}>
          <div className="today">{day1},{date}
                 
          </div>
          <div className="tommorrow">{nextDayFormatted}</div>
          <div className="aftertommorrow">{dayafternextday}</div>
        </div>
        <div className="slot2" style={slot2Style}>
          <div className="day4">{day4}</div>
          <div className="day5">{day5}</div>
          <div className="day6">{day6}</div>
        </div>


        <img src={arrowright} alt="After Tomorrow" style={{ width: '35px', height: '35px' }} onClick={handleright} />
      </div>
      <div className="showslot">
         <button 
         onClick={()=>handleSymbol(1)}
         style={{ backgroundColor:add===1?'#64bc6e':hovere===1?'#64bc6e':'lightgreen'}}
         onMouseEnter={()=>Sethovere(1)}
         onMouseLeave={()=>Sethovere(-10)}>10:00</button>   
         <button
         onClick={()=>handleSymbol(2)}
         style={{ backgroundColor:add===2?'#64bc6e':hovere===2?'#64bc6e':'lightgreen'}}
         onMouseEnter={()=>Sethovere(2)}
         onMouseLeave={()=>Sethovere(-10)}
         >10:15</button>
         <button
         onClick={()=>handleSymbol(3)}
         style={{ backgroundColor:add===3?'#64bc6e':hovere===3?'#64bc6e':'lightgreen'}}
         onMouseEnter={()=>Sethovere(3)}
         onMouseLeave={()=>Sethovere(-10)}
         >10:30</button>
         <button
         onClick={()=>handleSymbol(4)}
         style={{ backgroundColor:add===4?'#64bc6e':hovere===4?'#64bc6e':'lightgreen'}}
         onMouseEnter={()=>Sethovere(4)}
         onMouseLeave={()=>Sethovere(-10)}
         >10:45</button>
         <button
         onClick={()=>handleSymbol(5)}
         style={{ backgroundColor:add===5?'#64bc6e':hovere===5?'#64bc6e':'lightgreen'}}
         onMouseEnter={()=>Sethovere(5)}
         onMouseLeave={()=>Sethovere(-10)}
         >11:00</button>
         <button
         onClick={()=>handleSymbol(6)}
         style={{ backgroundColor:add===6?'#64bc6e':hovere===6?'#64bc6e':'lightgreen'}}
         onMouseEnter={()=>Sethovere(6)}
         onMouseLeave={()=>Sethovere(-10)}
         >11:15</button>     
         <button
         onClick={()=>handleSymbol(7)}
         style={{ backgroundColor:add===7?'#64bc6e':hovere===7?'#64bc6e':'lightgreen'}}
         onMouseEnter={()=>Sethovere(7)}
         onMouseLeave={()=>Sethovere(-10)}
         >11:30</button>
      </div>
      <div className="accept">
        <Link to={add==-10 ? "/slot_booking":"/slotbookingform"}>
        <button 
        style={{ backgroundColor:add!==-10?'purple':'white'}}
        >Continue</button>
        </Link>
      </div>
      
  
    </div>
      </div>
);
}
  


