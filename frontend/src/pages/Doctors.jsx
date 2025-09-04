import React from 'react'

export const Doctors = () => {
  const sampleDoctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      experience: "10 years",
      contact: "john.smith@clinic.com"
    },
    {
      id: 2,
      name: "Dr. Emily Brown",
      specialization: "Dermatologist",
      experience: "7 years",
      contact: "emily.brown@clinic.com"
    },
    {
      id: 3,
      name: "Dr. Raj Patel",
      specialization: "Orthopedic",
      experience: "12 years",
      contact: "raj.patel@clinic.com"
    }
  ];

  
  return <>
    <div className="doctors">
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {sampleDoctors.map(doc => (
          <div key={doc.id} className="doctor-card">
            <h3>{doc.name}</h3>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <p><strong>Contact:</strong> {doc.contact}</p>
          </div>
        ))}
      </div>
    </div>
  </>
}

