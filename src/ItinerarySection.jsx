import "./ItinerarySection.css";



export default function ItinerarySection() {
    return (
        <>
            <div className="container">
                <h2><i className="fas fa-calendar-alt"></i> Suggested Full-Day Itinerary</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-time">9:00 AM</div>
                        <div className="timeline-content">
                            <h3>Start at paris Historic Center</h3>
                            <p>Begin your day exploring the beautiful historic architecture</p>
                            <span className="duration">2 hours</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-time">11:30 AM</div>
                        <div className="timeline-content">
                            <h3>Coffee Break at Local Café</h3>
                            <p>Try traditional coffee and local pastries</p>
                            <span className="duration">30 minutes</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-time">12:00 PM</div>
                        <div className="timeline-content">
                            <h3>Visit Cultural Museum</h3>
                            <p>Immerse yourself in local history and art</p>
                            <span className="duration">2 hours</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-time">2:30 PM</div>
                        <div className="timeline-content">
                            <h3>Lunch at Traditional Restaurant</h3>
                            <p>Enjoy authentic local cuisine</p>
                            <span className="duration">1.5 hours</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-time">4:00 PM</div>
                        <div className="timeline-content">
                            <h3>Explore Garden Paradise</h3>
                            <p>Peaceful walk through botanical gardens</p>
                            <span className="duration">1.5 hours</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-time">6:00 PM</div>
                        <div className="timeline-content">
                            <h3>Sunset at City Viewpoint</h3>
                            <p>Watch the sunset with panoramic city views</p>
                            <span className="duration">1 hour</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-time">8:00 PM</div>
                        <div className="timeline-content">
                            <h3>Dinner & Local Entertainment</h3>
                            <p>End the day with great food and cultural shows</p>
                            <span className="duration">2 hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





