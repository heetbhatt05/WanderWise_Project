import "./Navbaar.css"
import WanderWiseLogo from "./assets/WanderWise_Logo.png";
import NavbaarButton from "./NavbaarButton.jsx";


export default function Navbaar() {
    return (
        <>
            <div className="Navbar-main">
                <img src={WanderWiseLogo} alt="WanderWise-Logo" className="WanderWise-Logo"></img>
                <div className="main-links">
                    <a href="#" className="Navbar-link">Home</a>
                    <a href="#" className="Navbar-link">Destination</a>
                    <a href="#" className="Navbar-link">About Us</a>
                    <a href="#" className="Navbar-link">Review</a>
                    <NavbaarButton />

                </div>
            </div>
            
        </>
    )
}