import "./FoodSection.css";


export default function FoodSection() {
    return (
        <>
            <div className="food-section">
                <h2><span className="emoji">🍽</span> Local Food & Restaurants</h2>
                <div className="food-grid">
                    <div className="restaurants">
                        <h3>Top Restaurants</h3>

                        <div className="restaurant-card">
                            <div className="restaurant-info">
                                <h4>paris Spice Kitchen</h4>
                                <p>Local Cuisine<br /><span>Traditional regional dishes</span></p>
                                <div className="rating"><span className="star">⭐</span> 4.7</div>
                            </div>
                            <div className="price">$$</div>
                        </div>

                        <div className="restaurant-card">
                            <div className="restaurant-info">
                                <h4>Royal Palace Restaurant</h4>
                                <p>Fine Dining<br /><span>Gourmet local fusion</span></p>
                                <div className="rating"><span className="star">⭐</span> 4.9</div>
                            </div>
                            <div className="price">$$$</div>
                        </div>

                        <div className="restaurant-card">
                            <div className="restaurant-info">
                                <h4>Street Food Paradise</h4>
                                <p>Street Food<br /><span>Authentic street snacks</span></p>
                                <div className="rating"><span className="star">⭐</span> 4.5</div>
                            </div>
                            <div className="price">$</div>
                        </div>
                    </div>

                    <div className="dishes">
                        <h3>Must-Try Local Dishes</h3>
                        <div className="dishes-card">
                            <ul>
                                <li><span className="dish-icon">🍴</span> paris Special Curry</li>
                                <li><span className="dish-icon">🍴</span> Traditional Sweet Delicacy</li>
                                <li><span className="dish-icon">🍴</span> Famous Local Bread</li>
                                <li><span className="dish-icon">🍴</span> Regional Specialty Drink</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}






