import "./Input-Section.css";


export default function InputSection() {
    return (
        <>
            <div className="input-section-heading">
                <h1 className="input-section-heading-text">Where would you like to go?<br></br></h1>
                <h3 className="input-section-heading-text2">Enter your dream destination and let us create the perfect itinerary for you</h3>

            </div>
            <div className="main-input">
                <div className="input">
                    <div className="input-destination">
                        <i className="fas fa-map-marker-alt"></i>
                        <input type="text" id="location" placeholder="Enter destination city (eg., vadodara,Paris,Tokyo)" />
                    </div>
                    <div className="input-destination">
                        <i className="fas fa-calendar-alt"></i>
                        <input type="text" id="date" placeholder="Travel dates (optional)" />
                    </div>
                    <div className="button">
                        <button className="input-section-btn1">Make My Plan</button>
                    </div>
                </div>
            </div>
        </>
    )
}