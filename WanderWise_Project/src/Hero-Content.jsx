import './Hero-Content.css';

export default function HeroContent() {
  return (
    <div className="hero-content-div">
      <h1 className="hero-content-heading">
        Every Great Adventure Begins<br />With A Wise Choice
      </h1>
      <button className="hero-content-button">
        Start Planning Your Trip <span className="arrow">↓</span>
      </button>
    </div>
  );
}