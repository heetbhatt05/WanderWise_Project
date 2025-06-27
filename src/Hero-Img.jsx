// import MountainImg from './assets/mountain-img.jpg'; // Replace with your uploaded image path
// import './Hero-Img.css';

// export default function HeroImg() {
//   return (
//     <div
//       className="Hero-Img-Div"
//       style={{
//         backgroundImage: `url(${MountainImg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         width: '100%',
//         height: '100%',
//         position: 'absolute',
//         zIndex: 1,
//       }}
//     />
//   );
// }




import React from "react";
import MountainImg from "/mountain-img.jpg";
import "./Hero-Img.css";

export default function HeroImg() {
  return (
    <div
      className="Hero-Img-Div"
      style={{
        backgroundImage: `url(${MountainImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
      }}
    />
  );
}
