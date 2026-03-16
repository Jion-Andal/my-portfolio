import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <img src="https://via.placeholder.com/800x400/2c3e50/ffffff?text=Portfolio+Hero" alt="Sample Hero Image" className="img-fluid rounded shadow mb-4" />
            <div className="hero-description">
              <h1 className="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
              <p className="lead">This is a sample description for the hero section. Here you can showcase your work, skills, and achievements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;