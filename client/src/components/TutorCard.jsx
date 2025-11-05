import React from 'react';

export default function TutorCard({tutor}){
  return (
    <div className="tutor-card">
      <div className="avatar">
        <img src="avatar.png" alt="" />
      </div>
      <h3>{tutor.name}</h3>
      <div className="meta">{tutor.degree} • {tutor.exp}</div>
      <div className="subjects">{tutor.subjects.join(', ')}</div>
      <button className="btn" onClick>Details</button>
    </div>
  );
}
