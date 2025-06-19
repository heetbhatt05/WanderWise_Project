import React from "react";
import "./ReviewsSection.css"; // Make sure to create this CSS file

const reviews = [
  {
    emoji: "🧑‍💼",
    stars: 5,
    text: `"WanderWise helped me plan the most amazing trip to Tokyo! The itinerary was perfect and I discovered places I never would have found on my own."`,
    name: "Sarah Johnson",
    location: "New York",
  },
  {
    emoji: "🧑‍🍳",
    stars: 5,
    text: `"The restaurant recommendations were spot on! Every meal was incredible and the local food suggestions were authentic."`,
    name: "Miguel Rodriguez",
    location: "Barcelona",
  },
  {
    emoji: "🧑‍🚀",
    stars: 5,
    text: `"Perfect for first-time travelers! The detailed itinerary and weather information made my trip stress-free and enjoyable."`,
    name: "Emily Chen",
    location: "London",
  },
];

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Travelers Say</h2>
      <p className="reviews-subtitle">
        Join thousands of happy travelers who’ve discovered amazing destinations
      </p>
      <div className="reviews-cards">
        {reviews.map((review, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-emoji">{review.emoji}</div>
            <div className="review-stars">
              {Array.from({ length: review.stars }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-author">
              <strong>{review.name}</strong>
              <div className="review-location">{review.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
