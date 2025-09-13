import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/doctors/")
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
            {/* <div className="doctor-header">
              <div className="doctor-avatar">
                {doc.name.charAt(4).toUpperCase()}
              </div>
              <h3 className="doctor-name">{doc.name}</h3>
            </div> */}

            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Experience:</strong> {doc.experienceYears}</p>
            <p><strong>Experience:</strong> {doc.qualification}</p>
            <p><strong>Contact:</strong> {doc.clinicAddress}</p>
          </div>
        ))}
      </div>
    </div>

  </>
}

