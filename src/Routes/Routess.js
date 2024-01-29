import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from '../components/About'
import Account from '../components/Account'
import Contact from '../components/ContactUs'
import Home from '../components/Home'
import ServicesPage from '../components/Services/Services'
import Cleaning from '../components/Services/Cleaning'
function Routess(){
    return (
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>           
            <Route path='/Account' element={<Account/>}/> 
            <Route path="/Services/Services" element={<ServicesPage />}></Route>
            <Route path="/Services/Services/Cleaning" element={<Cleaning />}></Route>
        </Routes>
       



    )
}

export default Routess