import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Doctors } from "./pages/Doctors";
import { Patients } from "./pages/Patients";
import { Appointments } from "./pages/Appointments";


const App = () => {


  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/doctors" element={<Doctors/>}></Route>
        <Route path="/patients" element={<Patients/>}></Route>
        <Route path="/appointments" element={<Appointments/>}></Route>
      </Routes>
      <Footer/>

    </BrowserRouter>
  </>
}

export default App
