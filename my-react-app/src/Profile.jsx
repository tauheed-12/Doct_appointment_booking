export default function Profile(){
    return(
        <div className="Outerdiv">
    <div className="Profile-Section">
        <div className="Profile-Banner">
              <div className="Profile-Image">
                   <i class="fa-solid fa-user-doctor"></i>
              </div>
              <div className="Profile-Name">
                <div className="Doc-Name">
                    <span>Dr. Manik Dalvi</span>
                </div>
                <div className="Doc-Desg">
                    <span>Obstetrics & Gynecology MBBS,MS</span>
                </div>
                <button type="submit" id="App-button">BOOK APPOINTEMENT</button>
              </div>
        </div>
        <div className="Profile details">
              <div className="profile-header">
                <span>Book a Clinic Appointement</span>
              </div>
              <div className="profile-card">
                <div className="timing-detail">
                    <span><i class="fa-regular fa-clock"></i>Next available at</span>
                    <span id="timing"> 10:00 am    tommorrow</span>
                </div>
                <div className="Clinic-add">
                    <span><i class="fa-solid fa-location-dot"></i>
                    Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302</span>
                </div>
                <hr></hr>
                <div className="book-app">
                    <span id="first1">Book Clinic Visit</span>
                    <span id="second2">No booking Fee</span>
                </div>
              </div>
        </div>
    </div>
    </div>
    )
}