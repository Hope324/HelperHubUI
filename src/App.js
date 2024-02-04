import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Routess from './Routes/Routess';
import Pricing from './components/PricingMap/Pricing';
import Home from './components/Home';
// //import About from './components/About';
// import MemberShipDetails from './components/PricingMap/MembershipDetails';
// import CitySelection from './components/PricingMap/CitySelection';
// import ServiceSelection from './components/PricingMap/Serviceselection';
// import DetailsRegardingBooking from './components/PricingMap/DetailsRegardingBooking';
import WorkShiftAndDate from './components/PricingMap/WorkShiftAndDate';

function App() {
  return (
    <div>
      <Navbar />
      {/* <ServiceSelection/> */}
      {/* <MemberShipDetails/> */}
      {/* <Routess/> */}
      <WorkShiftAndDate/>
      <Footer />
    </div>
  );
}

export default App;
