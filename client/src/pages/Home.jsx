import React from 'react';
import { Link } from 'react-router-dom';
import learning from "../assets/Learning.jpg"
import { Menu } from "antd";


export default function Home(){
  return (
    <section className="container">
      <h1>Unlock Your Potential with Tebta Academy</h1>
      <h4>Personalized tutoring designed to help students excel in Math, Science, Languages, and more — available online or at home.</h4>
      <img className="learnImg" src={learning} alt="Traditional Studying" />

      <section className="hero container">
        <div className="hero-left">
        <h1>Tebta Academy</h1>
        <p>Accessible, high-quality tutoring tailored to each learner. Choose in-person or online.</p>
        <div className="cta-row">
          <Link to="/contact" className="btn">Book a Tutor</Link>
          <Link to="/services" className="btn ghost">Explore Services</Link>
        </div>
      </div>
      <div className="hero-right">
        <h2 className>Welcome to Tebta Academy</h2>
        <br/>
        <p>
          We are dedicated to providing personalized, high-quality tutoring to help students reach their
          full potential. Whether it’s one-on-one tutoring, group lessons, or test preparation, we’re here
          to support every learner’s journey.
        </p>      
      </div>
      </section>
      <div className='hero'>
          <h2>Why Choose Us?</h2>
          <ul className="cursor-pointer bg-gray-100 rounded-lg w-48 divide-y divide-gray-300">
            <li>
              Experienced Tutors: Our tutors are experts in their fields with a passion for teaching.
            </li>
            <li>
              Customized Learning: We tailor our lessons to fit each student’s unique needs and goals.
            </li>
            <li>
              Flexible Scheduling: Book sessions at times that work best for you, whether online or in-person.
            </li>
            <li>
              Comprehensive Subjects: From Math and Science to Languages and Test Prep, we cover it all.
            </li>
            <li>
              Proven Results: Our students consistently achieve improved grades and greater confidence.
            </li>
          </ul>
        </div>
    </section>
    
  );
}
