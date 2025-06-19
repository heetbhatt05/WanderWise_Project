import HeroImg2 from "./assets/Hero-Image.jpg";
import "./Hero-Img.css";

export default function HeroImg() {
    return (
        <div
            className="Hero-Img-Div"
            style={{
                backgroundImage: `url(${HeroImg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",
                position: "relative",
            }}
        >
            {/* You can add hero text or buttons here */}
        </div>
    );
}