import React from 'react'
import Navbar from './Navbar'
import './Css/Home.css'
import { Link } from 'react-router-dom';

function home() {
  return (
    
    <div id='Main'>

        <header>
            <h1>Welcome to City Guide</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#attractions">Attractions</Link></li>
                    <li><Link to="#restaurants">Restaurants</Link></li>
                    <li><Link to="#events">Events</Link></li>
                    <li><Link to="#events">Local Guide</Link></li>
                </ul>
            </nav>
        </header>

        {/* <!-- Section-1  --> */}
        <section className="Section-1">
            <div className="overlay">
                <div className="hero-content">
                    <h1>Gorgeous Gujarat</h1>
                </div>
            </div>
        </section>

        {/* <!-- Section-2  --> */}
        <section className="Section-2">
            <h1>Gujarat Tourism - Explore Culture, Heritage and Spirituality in Gujarat</h1>
            <p>
                &nbsp &nbsp &nbsp &nbsp Gujarat is a state in the western part of India famous for its diverse culture,
                heritage, and authentic
                cuisine.
                It’s one of the unique and marvelous sights of India. Situated on the banks of Sabarmati River, Gujarat
                houses some of the best artifacts from the medieval period.
                History of this place speaks for itself. It stretches from the age-old Harappan Civilization to the
                Mughal period.
                Gujarat’s endless stories from ground to the sky are timeless with historical and cultural traditions
                embellishing this state.
            </p>
            <p>
                &nbsp &nbsp &nbsp Gujarat is also the land of Lord Krishna. It’s the hometown to India’s famous freedom
                fighter
                <span className="highlight">Mahatma Gandhi</span>. Hospitality, compassion, and endurance are the edifice
                upon which
                <span className="highlight">Gujarat Tourism</span> is built. Gujarat offers its tourists scenic beauty from
                <span className="highlight-orange">Great Rann of Kutch</span> to the hills of Satpura. Gujarat is the only
                place in the entire world to view pure Asiatic lions.
            </p>
        </section>

        {/* <!-- Section-3 --> */}
        <section className="Section-3">
            <div className="card">
                <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg"
                    alt="Attraction 1" />
                <h3>City Park</h3>
                <p>Explore the largest park in the city, a perfect place for relaxation and fun.</p>
            </div>

            <div className="card">
                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/laxmi-vilas-palace/Laxmi-Vilas-Palace-Banner1.jpg"
                    alt="Attraction 2" />
                <h3>Historical Museum</h3>
                <p>Delve into the city's rich history at the renowned Historical Museum.</p>
            </div>

            <div className="card">
                <img src="https://cdn.tvmnews.mt/wp-content/uploads/2018/04/19064131/4992-1170x702.jpg"
                    alt="Attraction 3" />
                <h3>Art Gallery</h3>
                <p>Discover contemporary art from local and international artists.</p>
            </div>
        </section>

        {/* <!-- Section-4: City Selection --> */}
        <section className="Section-4">
            <h2>Select a City</h2>
            <div className="city-grid">
                <Link to="/city/Ahmedabad" className="city-button">Ahmedabad</Link>
                <Link to="/city/vadodara" className="city-button">Vadodara</Link>
                <Link to="/city/surat" className="city-button">Surat</Link>
                <Link to="/city/rajkot" className="city-button">Rajkot</Link>
                <Link to="/city/gandhinagar" className="city-button">Gandhinagar</Link>
                <Link to="/city/bhavnagar" className="city-button">Bhavnagar</Link>
                <Link to="/city/Junagadh" className="city-button">Junagadh</Link>
                <Link to="/city/Amreli" className="city-button">Amreli</Link>
                <Link to="/city/Anand" className="city-button">Anand</Link>
                <Link to="/city/Aravalli" className="city-button">Aravalli</Link>
                <Link to="/city/Banaskantha" className="city-button">Banaskantha</Link>
                <Link to="/city/Bharuch" className="city-button">Bharuch</Link>
                <Link to="/city/Botad" className="city-button">Botad</Link>
                <Link to="/city/Chhota-Udepur" className="city-button">Chhota-Udepur</Link>
                <Link to="/city/Dahod" className="city-button">Dahod</Link>
                <Link to="/city/Dangs" className="city-button">Dangs</Link>
                <Link to="/city/Devbhumi-Dwarka" className="city-button">Devbhumi-Dwarka</Link>
                <Link to="/city/Gir-Somnath" className="city-button">Gir Somnath</Link>
                <Link to="/city/Jamnagar" className="city-button">Jamnagar</Link>
                <Link to="/city/Kachchh" className="city-button">Kachchh</Link>
                <Link to="/city/Kheda" className="city-button">Kheda</Link>
                <Link to="/city/Mahesana" className="city-button">Mahesana</Link>
                <Link to="/city/Mahisagar" className="city-button">Mahisagar</Link>
                <Link to="/city/Morbi" className="city-button">Morbi</Link>
                <Link to="/city/Narmada" className="city-button">Narmada</Link>
                <Link to="/city/Navsari" className="city-button">Navsari</Link>
                <Link to="/city/Panchmahals" className="city-button">Panchmahals</Link>
                <Link to="/city/Patan" className="city-button">Patan</Link>
                <Link to="/city/Porbandar" className="city-button">Porbandar</Link>
                <Link to="/city/Sabarkantha" className="city-button">Sabarkantha</Link>
                <Link to="/city/Surendranagar" className="city-button">Surendranagar</Link>
                <Link to="/city/Tapi" className="city-button">Tapi</Link>
                <Link to="/city/Valsad" className="city-button">Valsad</Link>
            </div>
        </section>

        <section className="Section-5">
            <div className="Section-5-container">
                <div className="Section-5-column">
                    <h3>NAVIGATION</h3>
                    <ul>
                        <li><Link to="#" className="active">Home</Link></li>
                        <li><Link to="#">Why Us</Link></li>
                        <li><Link to="#">Tour Packages</Link></li>
                        <li><Link to="#">Hotel Booking</Link></li>
                        <li><Link to="#">Car Rental</Link></li>
                        <li><Link to="#">Rann Utsav</Link></li>
                        <li><Link to="#">Travel Guide</Link></li>
                        <li><Link to="#">Contact us</Link></li>
                    </ul>
                </div>

                <div className="Section-5-column">
                    <h3>GUJARAT PACKAGES</h3>
                    <ul>
                        <li><Link to="#">Dwarka Somnath Tour</Link></li>
                        <li><Link to="#">Khushboo Gujarat ki</Link></li>
                        <li><Link to="#">Saurashtra Darshan</Link></li>
                        <li><Link to="#">Best of Gujarat Tour</Link></li>
                        <li><Link to="#">Sizzling Kutch</Link></li>
                        <li><Link to="#">Panch Dwarka Tour</Link></li>
                        <li><Link to="#">Gujarat Tourism Packages</Link></li>
                        <li><Link to="#">Gujarat Group Tour</Link></li>
                    </ul>
                </div>

                <div className="Section-5-column">
                    <h3>HOTELS IN GUJARAT</h3>
                    <ul>
                        <li><Link to="#">Hotels in Ahmedabad</Link></li>
                        <li><Link to="#">Hotels in Dwarka</Link></li>
                        <li><Link to="#">Hotels in Somnath</Link></li>
                        <li><Link to="#">Hotels in Diu</Link></li>
                        <li><Link to="#">Hotels in Sasangir</Link></li>
                        <li><Link to="#">Hotels in Saputara</Link></li>
                        <li><Link to="#">Hotels in Kutch</Link></li>
                        <li><Link to="#">Hotels in Junagadh</Link></li>
                    </ul>
                </div>

                <div className="Section-5-column">
                    <h3>GUJARAT TOURISM</h3>
                    <ul>
                        <li><Link to="#">About Gujarat</Link></li>
                        <li><Link to="#">Weekend Getaways</Link></li>
                        <li><Link to="#">Sightseeing places in Gujarat</Link></li>
                        <li><Link to="#">Tourist attraction in Gujarat</Link></li>
                        <li><Link to="#">Maps of Gujarat</Link></li>
                        <li><Link to="#">Gir Safari permit</Link></li>
                        <li><Link to="#">Kutch Tourism</Link></li>
                        <li><Link to="#">Fairs & Festival</Link></li>
                    </ul>
                </div>
            </div>
        </section>


        <footer className="ft">
            <p>&copy; 2024 City Guide. All Rights Reserved. | <Link to="#contact">Contact Us</Link></p>
        </footer>

    </div>
  )
}



export default home;