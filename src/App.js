import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePackage, setActivePackage] = useState('wedding');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: ''
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#home" className="logo">Elite Event House</a>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Crafting Unforgettable Moments</h1>
          <p>Premium event planning services in Rangpur</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get a Quote</a>
            <a href="#packages" className="btn-secondary">Our Packages</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Elite Event House</h2>
            <div className="divider"></div>
            <p>Transforming your vision into reality</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Your Trusted Event Planners in Rangpur</h3>
              <p>Founded in 2010, Elite Event House has been creating magical moments for clients across Rangpur and beyond. Our team of passionate professionals specializes in crafting bespoke weddings and corporate events that leave lasting impressions.</p>
              <p>With meticulous attention to detail and a commitment to excellence, we handle every aspect of your event to ensure a seamless experience from conception to execution.</p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Events</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-frame"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="divider"></div>
            <p>Comprehensive event solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👰</div>
              <h3>Wedding Planning</h3>
              <p>From intimate ceremonies to grand celebrations, we create your perfect wedding day with flawless execution.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Corporate Events</h3>
              <p>Professional event management for conferences, product launches, and corporate gatherings.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Social Events</h3>
              <p>Birthdays, anniversaries, and special occasions crafted to reflect your personal style.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🍽️</div>
              <h3>Catering Services</h3>
              <p>Gourmet catering options with customizable menus to suit your event and preferences.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎤</div>
              <h3>Entertainment</h3>
              <p>Access to premium entertainers, DJs, live bands, and performers to elevate your event.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📸</div>
              <h3>Photography</h3>
              <p>Professional photography and videography services to capture your special moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Packages</h2>
            <div className="divider"></div>
            <p>Customizable solutions for every budget</p>
          </div>
          <div className="package-tabs">
            <button 
              className={`tab-btn ${activePackage === 'wedding' ? 'active' : ''}`}
              onClick={() => setActivePackage('wedding')}
            >
              Wedding Packages
            </button>
            <button 
              className={`tab-btn ${activePackage === 'corporate' ? 'active' : ''}`}
              onClick={() => setActivePackage('corporate')}
            >
              Corporate Packages
            </button>
          </div>
          <div className="package-content">
            {activePackage === 'wedding' ? (
              <div className="package-grid">
                <div className="package-card">
                  <div className="package-header">
                    <h3>Silver Wedding</h3>
                    <div className="price">৳150,000</div>
                  </div>
                  <ul className="package-features">
                    <li>Venue selection assistance</li>
                    <li>Basic decoration package</li>
                    <li>Catering for 100 guests</li>
                    <li>Event coordination</li>
                    <li>Photography (6 hours)</li>
                  </ul>
                  <button className="btn-primary">Book Now</button>
                </div>
                <div className="package-card featured">
                  <div className="package-badge">Most Popular</div>
                  <div className="package-header">
                    <h3>Gold Wedding</h3>
                    <div className="price">৳250,000</div>
                  </div>
                  <ul className="package-features">
                    <li>Full wedding planning</li>
                    <li>Premium decoration</li>
                    <li>Catering for 150 guests</li>
                    <li>Professional event management</li>
                    <li>Photography & Videography (full day)</li>
                    <li>Entertainment options</li>
                  </ul>
                  <button className="btn-primary">Book Now</button>
                </div>
                <div className="package-card">
                  <div className="package-header">
                    <h3>Platinum Wedding</h3>
                    <div className="price">৳400,000+</div>
                  </div>
                  <ul className="package-features">
                    <li>Complete luxury wedding package</li>
                    <li>Custom venue design</li>
                    <li>Gourmet catering</li>
                    <li>Dedicated planning team</li>
                    <li>Premium photography & cinematography</li>
                    <li>Live entertainment</li>
                    <li>Personalized concierge service</li>
                  </ul>
                  <button className="btn-primary">Book Now</button>
                </div>
              </div>
            ) : (
              <div className="package-grid">
                <div className="package-card">
                  <div className="package-header">
                    <h3>Basic Corporate</h3>
                    <div className="price">৳100,000</div>
                  </div>
                  <ul className="package-features">
                    <li>Venue setup</li>
                    <li>Basic AV equipment</li>
                    <li>Catering for 50 attendees</li>
                    <li>Event coordination</li>
                  </ul>
                  <button className="btn-primary">Book Now</button>
                </div>
                <div className="package-card featured">
                  <div className="package-badge">Recommended</div>
                  <div className="package-header">
                    <h3>Professional Corporate</h3>
                    <div className="price">৳200,000</div>
                  </div>
                  <ul className="package-features">
                    <li>Full event planning</li>
                    <li>Premium AV setup</li>
                    <li>Catering for 100 attendees</li>
                    <li>Branding opportunities</li>
                    <li>Professional photography</li>
                    <li>Dedicated event manager</li>
                  </ul>
                  <button className="btn-primary">Book Now</button>
                </div>
                <div className="package-card">
                  <div className="package-header">
                    <h3>Executive Corporate</h3>
                    <div className="price">Custom Quote</div>
                  </div>
                  <ul className="package-features">
                    <li>Complete event production</li>
                    <li>High-end AV & lighting</li>
                    <li>Gourmet catering options</li>
                    <li>Custom branding solutions</li>
                    <li>Professional video production</li>
                    <li>Speaker management</li>
                    <li>Post-event analytics</li>
                  </ul>
                  <button className="btn-primary">Book Now</button>
                </div>
              </div>
            )}
          </div>
          <div className="custom-package">
            <p>Don't see what you're looking for? We specialize in custom packages tailored to your specific needs.</p>
            <a href="#contact" className="btn-secondary">Request Custom Package</a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Gallery</h2>
            <div className="divider"></div>
            <p>A glimpse of our spectacular events</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item wedding"></div>
            <div className="gallery-item corporate"></div>
            <div className="gallery-item decor"></div>
            <div className="gallery-item catering"></div>
            <div className="gallery-item venue"></div>
            <div className="gallery-item entertainment"></div>
          </div>
          <div className="gallery-cta">
            <p>Want to see more of our work?</p>
            <a href="#" className="btn-primary">View Full Portfolio</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <div className="divider"></div>
            <p>What our clients say about us</p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Elite Event House made our wedding day absolutely magical. Their attention to detail and professionalism was beyond our expectations. Highly recommended!"</p>
              </div>
              <div className="client-info">
                <div className="client-name">Ayesha & Rahim</div>
                <div className="client-event">Wedding, December 2022</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Our annual corporate conference was a huge success thanks to Elite Event House. They handled everything seamlessly, allowing us to focus on our attendees."</p>
              </div>
              <div className="client-info">
                <div className="client-name">TechSolutions Ltd.</div>
                <div className="client-event">Corporate Conference, March 2023</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"From the initial consultation to the final execution, the team was incredible. Our daughter's birthday party was the talk of the town!"</p>
              </div>
              <div className="client-info">
                <div className="client-name">The Khan Family</div>
                <div className="client-event">Birthday Celebration, August 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <div className="divider"></div>
            <p>Let's create something extraordinary together</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h4>Address</h4>
                  <p>kachari Bazar, Rangpur, Bangladesh</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+880 1572917704</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>eliteeventhouse000@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-text">
                  <h4>Working Hours</h4>
                  <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p>Friday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">in</a>
                <a href="#" className="social-icon">ig</a>
                <a href="#" className="social-icon">yt</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <select 
                    name="eventType" 
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="social">Social Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your event..." 
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Elite Event House</h3>
              <p>Creating extraordinary events that leave lasting impressions. Based in Rangpur, serving clients nationwide.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Wedding Planning</a></li>
                <li><a href="#">Corporate Events</a></li>
                <li><a href="#">Catering</a></li>
                <li><a href="#">Venue Decoration</a></li>
                <li><a href="#">Entertainment</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on our latest offers and event ideas.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Elite Event House. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
