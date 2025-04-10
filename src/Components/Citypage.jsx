import React from 'react';
import { useParams } from 'react-router-dom';
import cityData from './data/city.json';  
import './Css/Citypage.css';  

function CityPage() {
  const { cityName } = useParams();  
  const city = cityData[cityName.toLowerCase()];  

  if (!city) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>City Not Found</h2>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${city.mainImage})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>{city.name}</h1>
          <p>{city.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-box">
        {city.attractions.map((place, index) => (
          <div className="box-1" key={index}>
            <div className="left">
              <img src={place.image} alt={place.name} />
            </div>
            <div className="right">
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityPage;
