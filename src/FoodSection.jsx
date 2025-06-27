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