import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Subjects from './pages/Subjects';
import Tutors from './pages/Tutors';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/subjects" element={<Subjects/>} />
          <Route path="/tutors" element={<Tutors/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
