import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
  return <>
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-badge">🏥 Trusted Healthcare Platform</div>
            <h1>Your Health, <span>Our Priority</span></h1>
            <p className="hero-description">
              Experience world-class healthcare from the comfort of your home. 
              Connect with certified specialists, book appointments instantly, 
              and access comprehensive health management—all in one secure platform.
            </p>
            <div className="hero-buttons">
              <Link to="/doctors" className="btn btn-primary">
                <span>Find a Doctor</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/appointments" className="btn btn-secondary">
                <span>Book Appointment</span>
              </Link>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Certified Doctors</span>
              </div>
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Secure & Private</span>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <div className="hero-img-decoration"></div>
            <img src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?w=600&auto=format" alt="Professional Medical Team" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="statistics-inner">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-number">15,000+</div>
            <div className="stat-label">Patients Served</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21M19 21H21M19 21H14M5 21H3M5 21H10M10 21V16C10 15.4696 10.2107 14.9609 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9609 14 15.4696 14 16V21M10 21H14M9 7H10M9 11H10M14 7H15M14 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-number">150+</div>
            <div className="stat-label">Expert Doctors</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Available Support</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="section-header">
          <h2>Why Choose <span>CareHive</span></h2>
          <p>Experience healthcare that puts you first with our comprehensive platform</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-img">
              <img src="https://images.unsplash.com/photo-1617080090911-91409e3496ad?w=400&auto=format" alt="Experienced Specialists" />
            </div>
            <div className="why-card-content">
              <div className="why-number">01</div>
              <h3>Experienced Specialists</h3>
              <p>Connect with board-certified doctors across multiple specialties. Our medical professionals bring years of expertise to provide accurate diagnoses and personalized treatment plans.</p>
            </div>
          </div>
          
          <div className="why-card">
            <div className="why-card-img">
              <img src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=400&auto=format" alt="Seamless Appointments" />
            </div>
            <div className="why-card-content">
              <div className="why-number">02</div>
              <h3>Seamless Appointments</h3>
              <p>Book consultations in seconds with our intuitive scheduling system. No more waiting rooms or phone calls—get the care you need when you need it.</p>
            </div>
          </div>
          
          <div className="why-card">
            <div className="why-card-img">
              <img src="https://images.unsplash.com/photo-1531341406-2b466854b914?w=400&auto=format" alt="24/7 Support" />
            </div>
            <div className="why-card-content">
              <div className="why-number">03</div>
              <h3>Round-the-Clock Support</h3>
              <p>Our dedicated support team is available 24/7 to assist you. From technical help to medical inquiries, we're always here to ensure your healthcare journey is smooth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="section-header">
          <h2>Comprehensive <span>Healthcare Services</span></h2>
          <p>Everything you need for complete health management in one platform</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Online Consultations</h3>
            <p>Video calls with specialists from anywhere</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📄</div>
            <h3>Digital Prescriptions</h3>
            <p>Instant e-prescriptions sent securely</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Health Records</h3>
            <p>Secure access to your medical history</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧪</div>
            <h3>Lab Test Bookings</h3>
            <p>Schedule tests and view results online</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Our <span>Patients Say</span></h2>
          <p>Real experiences from people who trust CareHive with their health</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
            <p className="testimonial-text">
              "CareHive has completely transformed how I manage my family's healthcare. The doctors are professional, appointments are quick, and the platform is incredibly easy to use. Highly recommended!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">SR</div>
              <div className="author-info">
                <div className="author-name">Sarah Rodriguez</div>
                <div className="author-title">Patient since 2023</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
            <p className="testimonial-text">
              "As someone with a busy schedule, CareHive is a lifesaver. I can consult with specialists without taking time off work. The quality of care is exceptional, and the convenience is unmatched."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MK</div>
              <div className="author-info">
                <div className="author-name">Michael Kumar</div>
                <div className="author-title">Patient since 2022</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
            <p className="testimonial-text">
              "The 24/7 support is amazing! I had a medical concern late at night and was able to get immediate help. The doctors are knowledgeable and caring. This platform gives me peace of mind."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">EC</div>
              <div className="author-info">
                <div className="author-name">Emily Chen</div>
                <div className="author-title">Patient since 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <div className="newsletter-content">
            <h2>Stay <span>Connected</span> with CareHive</h2>
            <p>Get health tips, updates, and exclusive offers delivered to your inbox</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>

  </>
}