import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from '../components/About'
import Account from '../components/Account'
import Contact from '../components/ContactUs'
import Home from '../components/Home'
import ServicesPage from '../components/Services/Services'
import CitySelection from '../components/PricingMap/CitySelection'
import DetailsRegardingBooking from '../components/PricingMap/DetailsRegardingBooking'
import MemberShipDetails from '../components/PricingMap/MembershipDetails'
import Pricing from '../components/PricingMap/Pricing'
import ServiceSelection from '../components/PricingMap/Serviceselection'
import WorkShiftAndDate from '../components/PricingMap/WorkShiftAndDate'
import ServicesDescription from '../components/Services/ServicesDescription'
function Routess(){
    return (
        <Routes>
            <Route path='/CitySelection'  element={<CitySelection />}></Route>
            <Route path='/DetailsRegBooking' element= {<DetailsRegardingBooking/>} ></Route>
            <Route path='/MemberShipDetails'  element ={<MemberShipDetails/>}></Route>
            <Route path='/Pricing'  element={<Pricing />}></Route>
            <Route path='/ServiceSelection' element={<ServiceSelection />}></Route>
            <Route path='/WorkShiftAndDate' element={<WorkShiftAndDate />}></Route>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>           
            <Route path='/Account' element={<Account/>}/> 
            <Route path="/Services/Services" element={<ServicesPage />}></Route>
            <Route path="/Services/:title" element={<ServicesDescription />}></Route>

        </Routes>
       



    )
}

export default Routess