import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-me py-5 bg-secondary text-light">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="accordion" id="aboutAccordion">
          <div className="accordion-item bg-dark border-0">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#workExperience" aria-expanded="true" aria-controls="workExperience">
                Work Experience
              </button>
            </h2>
            <div id="workExperience" className="accordion-collapse collapse show" data-bs-parent="#aboutAccordion">
              <div className="accordion-body">
                <p>Here is my work experience. I have worked on various projects including web development, software engineering, and more.</p>
                <ul className="list-unstyled">
                  <li>Software Developer at Company A (2020 - Present)</li>
                  <li>Junior Developer at Company B (2018 - 2020)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border-0">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#education" aria-expanded="false" aria-controls="education">
                Educational Attainment
              </button>
            </h2>
            <div id="education" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
              <div className="accordion-body">
                <p>My educational background includes degrees in relevant fields.</p>
                <ul className="list-unstyled">
                  <li>Bachelor's Degree in Computer Science, University X (2014 - 2018)</li>
                  <li>High School Diploma, School Y (2010 - 2014)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;