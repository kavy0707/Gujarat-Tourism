import React from 'react';
import About from './Components/about';
import Login from './Components/Login'
import Home from './Components/home'
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Localguide from './Components/guide';
import Showguide from './Components/showguide';
import CityPage from './Components/Citypage';
CityPage

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Localguide" element={<Localguide />} />
        <Route exact path="/Showguide" element={<Showguide />} />
        <Route exact path="/city/:cityName" element={<CityPage />} />
      </Routes>
    </>
  );
}
export default App;