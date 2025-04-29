import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// components
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Cards from "./components/cards";
import Footer from "./components/footer";

// Import images
import bigben from "../img/bigben.jpg";
import empirestate from "../img/empirestate.jpg";
import paris from "../img/paris.jpg";
import colloseum from "../img/colloseum.jpeg";
import countries from "../img/countries.jpg";


// Cards array
const cards = [
  {
    imgName: bigben,
    city: "London",
    country: "UK",
  },
  {
    imgName: empirestate,
    city: "New York",
    country: "USA",
  },
  {
    imgName: paris,
    city: "Paris",
    country: "France",
  },
  {
    imgName: colloseum,
    city: "Rome",
    country: "Italy",
  },
];


// Background style
const backgroundStyle = {
  background: `url(${countries})`,
  backgroundSize: "cover",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <div style={backgroundStyle} className="d-flex flex-column min-vh-100"> {/* viewport to resize  */}
      <Navbar />
      <div className="container py-1">
      </div>
      <Jumbotron />
      <div className="container py-5">
        <div className="row justify-content-center">
          {cards.map((item, index) => (
            <div
              className="d-flex justify-content-center col-12 col-md-6 col-lg-3 mt-4" 
              key={index}
            >
              <Cards
                imgURL={item.imgName}
                title={item.city}
                description={item.country}
              />
            </div>
          ))}
        </div>
       
      </div>
      <Footer className="mt-auto" />
    </div>
  </React.StrictMode>
);


