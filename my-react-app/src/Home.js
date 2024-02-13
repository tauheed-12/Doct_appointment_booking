import img from "./img2.png";
import img2 from "./img4.jpg";
import verify from "./verified.png";
import slotimg from "./slot.png";
import calender from "./calendar.png";
import docto from "./docto.png";
import mob from "./mob.png";
import { Navigate, useNavigate } from "react-router-dom";
import banner from "./banne.png"
export default function Home({SetName,SetSpeciality,SetAddress}){
    const navigate=useNavigate()
    function handleClick(id) {
        const backendUrl = 'http://localhost:8080';
        const apiUrl = `${backendUrl}/api/doctors/${id}`;
        async function fetchData(apiUrl) {
            try {
              const response = await fetch(apiUrl);
          
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              const doctorInfo = await response.json();
          
              console.log('Doctor Info:', doctorInfo.details.name);
          
              if ('name' in doctorInfo.details && 'address' in doctorInfo.details && 'speciality' in doctorInfo.details) {
                SetName(doctorInfo.details.name);
                SetAddress(doctorInfo.details.address);
                SetSpeciality(doctorInfo.details.speciality);
                navigate('/slot_booking');
              }
            } catch (error) {
              console.error('Error fetching doctor information:', error);
            }
          }
          fetchData(apiUrl);    
      }
      
    return(
        <div>
        <div className="banner">
            <img src={banner}></img>
        </div>
        <section class="why-choose">
        <div id="why1">
            <img src={calender}></img>
            <h3>Convenient Booking: </h3>
            <p>Easily book appointment online, saving you time and effort.</p>
        </div>   
        <div id="why1">
            <img src={docto}></img>
            <h3>Expert Doctors:</h3>
            <p>Our team of experienced and highly qualified doctors ensures top-notch medical care.</p>
        </div>   
        <div id="why1">
            <img src={slotimg}></img>
            <h3>Flexible Slots:</h3>
            <p>Choose from a variety of time slots to fit your schedule.</p>
        </div>  
        <div id="why1">
            <img src={verify}></img>
            <h3>Secure and Confidential: </h3>
            <p>Your health information is treated with the utmost confidentiality and security.</p>
        </div>     
       </section>
        <section id="section">
        <h2 id="meet">Meet Our Expert Doctors</h2>
        <div class="doctor">
            <div class="bio">
                <img src={img}></img>
                <h3>Dr. RD Mukhija, MD</h3>
                <p><strong>Specialty:</strong> Surgery</p>
                <p><strong>Experience:</strong> 15 years</p>
                <p><strong>Bio:</strong> Dr. RD Mukhija is dedicated to providing comprehensive and compassionate care. His
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                  <button onClick={()=>handleClick(1)}>Book Slot</button>        
            </div>
            <div class="bio">
                <img src={img2}></img>
                <h3>Dr. B B Gupta, MD</h3>
                <p><strong>Specialty:</strong> Skins</p>
                <p><strong>Experience:</strong> 10 years</p>
                <p><strong>Bio:</strong> Dr. B B Gupta is dedicated to providing comprehensive and compassionate care. His
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                <button onClick={()=>handleClick(2)}>Book Slot</button>      
            </div>
            <div class="bio">
                <img src={img}></img>
                <h3>Dr. Emily Smith, MD</h3>
                <p><strong>Specialty:</strong> Bones</p>
                <p><strong>Experience:</strong> 13 years</p>
                <p><strong>Bio:</strong> Dr. Smith is dedicated to providing comprehensive and compassionate care. Her
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                <button onClick={()=>handleClick(3)}>Book Slot</button>        
            </div>
            <div class="bio">
                <img src={img2}></img>
                <h3>Dr. Hansraj, MD</h3>
                <p><strong>Specialty:</strong>Musceles</p>
                <p><strong>Experience:</strong> 12 years</p>
                <p><strong>Bio:</strong> Dr. Hansraj is dedicated to providing comprehensive and compassionate care. His
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                <button onClick={()=>handleClick(4)}>Book Slot</button>
            </div>
        </div>
    </section>
    <section class="how-it-works">
        <h2>Get Started with 3 Easy Steps</h2>
        <div className="flow">
            <div className="step"><span>01</span><div id="flow-id">Browse Doctors:</div><div id="flow-des">Explore our list of expert doctors and choose the one.</div></div>
            <div className="step"><span>02</span><div id="flow-id">Select a Time Slot:</div><div id="flow-des"> Pick a convenient time slot for your medical checkup.</div></div>
            <div className="step"><span>03</span><div id="flow-id">Book Your Appointment:</div><div id="flow-des">Confirm your booking, and you're all set!</div></div>
            <img src={mob}></img>
        </div>
    </section>
    <section class="testimonial">
        <h2>Testimonials</h2>
        <div className="card">
        <div className="card1">
            <img src={img2}></img>
            <p>"I've never experienced such a hassle-free way to book a medical appointment. The platform is intuitive, and the doctors are top-notch."</p>
            <span>- Jane D.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"The doctors on this platform are not only experts in their fields but also genuinely caring. I highly recommend it."</p>
            <span>- Mark S.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"I've never experienced such a hassle-free way to book a medical appointment. The platform is intuitive, and the doctors are top-notch."</p>
            <span>- Jane D.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"The doctors on this platform are not only experts in their fields but also genuinely caring. I highly recommend it."</p>
            <span>- Mark S.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"I've never experienced such a hassle-free way to book a medical appointment. The platform is intuitive, and the doctors are top-notch."</p>
            <span>- Jane D.</span>
        </div>
        </div>
    </section>
    <footer class="footer">
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
    </footer>
    </div>
    )
}