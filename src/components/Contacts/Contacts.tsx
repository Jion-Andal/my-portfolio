import React from 'react';
import './Contacts.css';

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="contacts py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <div className="mb-3">
                  <h3>Email</h3>
                  <a href="mailto:your.email@example.com" className="btn btn-primary">your.email@example.com</a>
                </div>
                <div>
                  <h3>Social Media</h3>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                      LinkedIn
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                      GitHub
                    </a>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;