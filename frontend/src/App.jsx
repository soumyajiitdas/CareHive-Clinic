import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Doctors } from './pages/Doctors';
import { Patients } from './pages/Patients';
import { Appointments } from './pages/Appointments';
import { Footer } from './components/Footer';


const App = () => {


  return <>
    <Navbar/>
    <Home/>
    <Doctors/>
    <Patients/>
    <Appointments/>
    <Footer/>
  </>
}

export default App
