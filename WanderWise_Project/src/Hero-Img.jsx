import HeroImg2 from "./assets/Hero-Image.jpg";
import "./Hero-Img.css";

export default function HeroImg() {
    return (
        <div className="Hero-Img-Div">
           <img src={HeroImg2} alt="Hero" className="Hero-Image"/>
        </div>
    )
}