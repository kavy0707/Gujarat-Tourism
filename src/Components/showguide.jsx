


import React from 'react';
import './Css/showguide.css';

function ShowGuide() {

  async function fetchGuideByCity(city) {
    const response = await fetch(`http://localhost:3000/api/auth/showguide?cityname=${city}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    const para = document.getElementById("guide");

    if (!data.guides || data.guides.length === 0) {
      console.error("Guide not found");
      para.innerHTML = "<p>No guide found</p>";
      return;
    }

    let cardContent = "";
    data.guides.forEach(guide => {
      cardContent += `
        <div class="guide-card">
          <h2>${guide.name}</h2>
          <p><strong>Email:</strong> ${guide.email}</p>
          <p><strong>Phone:</strong> ${guide.phonenumber}</p>
          <p><strong>Language:</strong> ${guide.language}</p>
          <p><strong>Bio:</strong> ${guide.bio}</p>
          <p><strong>Experience:</strong> ${guide.experience}</p>
        </div>
      `;
    });

    para.innerHTML = cardContent;
  }

  return (
    <div id='Main'>

      <header className='head-show'>
        <div className="header-title-show">
          <h1>Welcome to City Guide</h1>
        </div>
      </header>

      <div className="content-container">
        <div className="left-panel">
          <h2>Select a City</h2>
          <ul className="city-list">
            <li onClick={() => fetchGuideByCity("ahmedabad")}>Ahmedabad</li>
            <li onClick={() => fetchGuideByCity("rajkot")}>Rajkot</li>
            <li onClick={() => fetchGuideByCity("surat")}>Surat</li>
            <li onClick={() => fetchGuideByCity("vadodara")}>Vadodara</li>
            <li onClick={() => fetchGuideByCity("bhavnagar")}>Bhavnagar</li>
            <li onClick={() => fetchGuideByCity("jamnagar")}>Jamnagar</li>
            <li onClick={() => fetchGuideByCity("junagadh")}>Junagadh</li>
            <li onClick={() => fetchGuideByCity("gandhinagar")}>Gandhinagar</li>
            <li onClick={() => fetchGuideByCity("gandhinagar")}>Amreli</li>
            <li onClick={() => fetchGuideByCity("gandhinagar")}>Anand</li>
            <li onClick={() => fetchGuideByCity("gandhinagar")}>Aravalli</li>
            <li onClick={() => fetchGuideByCity("Banaskantha")}>Banaskantha</li>
            <li onClick={() => fetchGuideByCity("Bharuch")}>Bharuch</li>
            <li onClick={() => fetchGuideByCity("Botad")}>Botad</li>
            <li onClick={() => fetchGuideByCity("Chhota-Udepur")}>Chhota Udepur</li>
            <li onClick={() => fetchGuideByCity("Dahod")}>Dahod</li>
            <li onClick={() => fetchGuideByCity("Dangs")}>Dangs</li>
            <li onClick={() => fetchGuideByCity("Devbhumi-Dwarka")}>Devbhumi Dwarka</li>
            <li onClick={() => fetchGuideByCity("Gir-Somnath")}>Gir Somnath</li>
            <li onClick={() => fetchGuideByCity("Kachchh")}>Kachchh</li>
            <li onClick={() => fetchGuideByCity("Kheda")}>Kheda</li>
            <li onClick={() => fetchGuideByCity("Mahesana")}>Mahesana</li>
            <li onClick={() => fetchGuideByCity("Mahisagar")}>Mahisagar</li>
            <li onClick={() => fetchGuideByCity("Morbi")}>Morbi</li>
            <li onClick={() => fetchGuideByCity("Narmada")}>Narmada</li>
            <li onClick={() => fetchGuideByCity("Navsari")}>Navsari</li>
            <li onClick={() => fetchGuideByCity("Panchmahals")}>Panchmahals</li>
            <li onClick={() => fetchGuideByCity("Patan")}>Patan</li>
            <li onClick={() => fetchGuideByCity("Porbandar")}>Porbandar</li>
            <li onClick={() => fetchGuideByCity("Sabarkantha")}>Sabarkantha</li>
            <li onClick={() => fetchGuideByCity("Surendranagar")}>Surendranagar</li>
            <li onClick={() => fetchGuideByCity("Tapi")}>Tapi</li>
            <li onClick={() => fetchGuideByCity("Valsad")}>Valsad</li>
          </ul>
        </div>

        <div className="right-panel" id="guide"></div>

      </div>
    </div>
  )
}

export default ShowGuide;
