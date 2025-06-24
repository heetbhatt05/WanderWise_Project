// import "./FoodSection.css";


// export default function FoodSection() {
//     return (
//         <>
//             <div className="food-section">
//                 <h2><span className="emoji">🍽</span> Local Food & Restaurants</h2>
//                 <div className="food-grid">
//                     <div className="restaurants">
//                         <h3>Top Restaurants</h3>

//                         <div className="restaurant-card">
//                             <div className="restaurant-info">
//                                 <h4>paris Spice Kitchen</h4>
//                                 <p>Local Cuisine<br /><span>Traditional regional dishes</span></p>
//                                 <div className="rating"><span className="star">⭐</span> 4.7</div>
//                             </div>
//                             <div className="price">$$</div>
//                         </div>

//                         <div className="restaurant-card">
//                             <div className="restaurant-info">
//                                 <h4>Royal Palace Restaurant</h4>
//                                 <p>Fine Dining<br /><span>Gourmet local fusion</span></p>
//                                 <div className="rating"><span className="star">⭐</span> 4.9</div>
//                             </div>
//                             <div className="price">$$$</div>
//                         </div>

//                         <div className="restaurant-card">
//                             <div className="restaurant-info">
//                                 <h4>Street Food Paradise</h4>
//                                 <p>Street Food<br /><span>Authentic street snacks</span></p>
//                                 <div className="rating"><span className="star">⭐</span> 4.5</div>
//                             </div>
//                             <div className="price">$</div>
//                         </div>
//                     </div>

//                     <div className="dishes">
//                         <h3>Must-Try Local Dishes</h3>
//                         <div className="dishes-card">
//                             <ul>
//                                 <li><span className="dish-icon">🍴</span> paris Special Curry</li>
//                                 <li><span className="dish-icon">🍴</span> Traditional Sweet Delicacy</li>
//                                 <li><span className="dish-icon">🍴</span> Famous Local Bread</li>
//                                 <li><span className="dish-icon">🍴</span> Regional Specialty Drink</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }






// import "./FoodSection.css";

// export default function FoodSection({food, dishes}) {
//     return (
//         <div className="food-section-unique">
//             <h2 className="food-section-unique-heading">
//                 <span className="food-section-unique-emoji">🍽</span> Local Food & Restaurants
//             </h2>
//             <div className="food-section-unique-grid">
//                 <div className="food-section-unique-restaurants">
//                     <h3>Top Restaurants</h3>

//                     <div className="food-section-unique-restaurant-card">
//                         <div className="food-section-unique-restaurant-info">
//                             <h4>paris Spice Kitchen</h4>
//                             <p>Local Cuisine<br /><span>Traditional regional dishes</span></p>
//                             <div className="food-section-unique-rating">
//                                 <span className="food-section-unique-star">⭐</span> 4.7
//                             </div>
//                         </div>
//                         <div className="food-section-unique-price">$$</div>
//                     </div>

//                     <div className="food-section-unique-restaurant-card">
//                         <div className="food-section-unique-restaurant-info">
//                             <h4>Royal Palace Restaurant</h4>
//                             <p>Fine Dining<br /><span>Gourmet local fusion</span></p>
//                             <div className="food-section-unique-rating">
//                                 <span className="food-section-unique-star">⭐</span> 4.9
//                             </div>
//                         </div>
//                         <div className="food-section-unique-price">$$$</div>
//                     </div>

//                     <div className="food-section-unique-restaurant-card">
//                         <div className="food-section-unique-restaurant-info">
//                             <h4>Street Food Paradise</h4>
//                             <p>Street Food<br /><span>Authentic street snacks</span></p>
//                             <div className="food-section-unique-rating">
//                                 <span className="food-section-unique-star">⭐</span> 4.5
//                             </div>
//                         </div>
//                         <div className="food-section-unique-price">$</div>
//                     </div>
//                 </div>

//                 <div className="food-section-unique-dishes">
//                     <h3>Must-Try Local Dishes</h3>
//                     <div className="food-section-unique-dishes-card">
//                         <ul>
//                             <li><span className="food-section-unique-dish-icon">🍴</span> paris Special Curry</li>
//                             <li><span className="food-section-unique-dish-icon">🍴</span> Traditional Sweet Delicacy</li>
//                             <li><span className="food-section-unique-dish-icon">🍴</span> Famous Local Bread</li>
//                             <li><span className="food-section-unique-dish-icon">🍴</span> Regional Specialty Drink</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }










import "./FoodSection.css";

export default function FoodSection({ food, dishes }) {
    return (
        <div className="food-section-unique">
            <h2 className="food-section-unique-heading">
                <span className="food-section-unique-emoji">🍽</span> Local Food & Restaurants
            </h2>
            <div className="food-section-unique-grid">
                <div className="food-section-unique-restaurants">
                    <h3>Top Restaurants</h3>
                    {food.map((item, idx) => (
                        <div className="food-section-unique-restaurant-card" key={idx}>
                            <div className="food-section-unique-restaurant-info">
                                <h4>{item.name}</h4>
                                <p>{item.type}<br /><span>{item.desc}</span></p>
                                <div className="food-section-unique-rating">
                                    <span className="food-section-unique-star">⭐</span> {item.rating}
                                </div>
                            </div>
                            <div className="food-section-unique-price">{item.price}</div>
                        </div>
                    ))}
                </div>
                <div className="food-section-unique-dishes">
                    <h3>Must-Try Local Dishes</h3>
                    <div className="food-section-unique-dishes-card">
                        <ul>
                            {dishes.map((dish, idx) => (
                                <li key={idx}>
                                    <span className="food-section-unique-dish-icon">🍴</span> {dish}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}