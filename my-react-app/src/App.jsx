import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile.jsx";
import FAQ from "./FAQ.js";
import Treatements from "./Treatements.js";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useState } from "react";
import Slot from "./Slot.jsx";
import Form from "./form.js";
export default function App(){
    const[name,SetName]=useState("")
    const[specialty,SetSpeciality]=useState("")
    const[address,SetAddress]=useState("")
    const[slot,SetSlot]=useState("")
    return(
        <>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home SetName={SetName} SetAddress={SetAddress} SetSpeciality={SetSpeciality}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/treatement" element={<Treatements/>}/>
          <Route path="/slot_booking" element={<Slot name={name} specialty={specialty} address={address} SetSlot={SetSlot} slot={slot}/>}/>
          <Route path="/slotbookingform" element={<Form slot={slot}/>}></Route>
          </Routes>
        </>
    )
}