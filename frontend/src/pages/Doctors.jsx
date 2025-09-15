import React, {useEffect, useState} from 'react';
import API from '../services/Api';

export const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  
  useEffect(()=>{
    API.get("/doctors")
    .then((res)=>{
      setDoctors(res.data);
    })
    .catch((err)=>{
      console.error("error message:", err);
    })
  },[]);


  return <>
    <div className="page-container">
      <h2 className="page-title">Our Doctors <span>:</span></h2>

      <div className="doctor-list">
        {doctors.map((doc) => (
          <div key={doc._id} className="doctor-card">
            <div className="doctor-header">
              <div className="doctor-avatar">
                {doc.userId.name.charAt(4).toUpperCase()}
              </div>
              <h3 className="doctor-name">{doc.userId.name}</h3>
            </div>

            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Experience:</strong> {doc.experienceYears} years</p>
            <p><strong>Qualification:</strong> {doc.qualification}</p>
            <p><strong>Contact:</strong> {doc.clinicAddress}</p>
          </div>
        ))}
      </div>
    </div>

  </>
}
