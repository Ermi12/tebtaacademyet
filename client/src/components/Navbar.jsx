import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <img src="/logo.png" alt="logo" className="logo"/>
          <div>
            <div className="brand-name">Tebta Academy</div>
            <div className="brand-tag">Tutors — Online or at Home</div>
          </div>
        </div>
        <nav className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/tutors">Tutors</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
