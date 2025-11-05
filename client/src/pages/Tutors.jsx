import React, {useEffect, useState} from 'react';
import TutorCard from '../components/TutorCard';

export default function Tutors(){
  const tutors = [
    {
      name: "Abebe Mekonnen",
      exp: "5 years",
      subjects: ["Biology", "Physics", "Chemistry"],
    },
    {
      name: "Kebede Tesfaye",
      exp: "2 years",
      subjects: ["Amharic", "English", "ICT"],
    },
    {
      name: "Alem Tadesse",
      exp: "3 years",
      subjects: ["Statistics", "Economics", "Mathematics", "English"],
    },
    {
      name: "Abel Mequanent",
      exp: "3 years",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Statistics"],
    },
    {
      name: "Anwar Mohammed",
      exp: "2+ years",
      subjects: ["English", "ICT", "Chemistry", "Biology", "Physics"],
    },
    {
      name: "Kidist Kassahun",
      exp: "4 years",
      subjects: ["Mathematics", "Statistics", "Economics", "English", "ICT"],
    },
    {
      name: "Betel Teshome",
      exp: "3+ years",
      subjects: ["Statistics", "Chemistry", "Economics", "Mathematics", "Amharic"],
    },
  ];

  return (
    <div className="container page">
      <h2>Our Tutors</h2>
      <div className="tutor-grid">
        {tutors.map(t => <TutorCard key={t.id} tutor={t} />)}
      </div>
    </div>
  );
}
