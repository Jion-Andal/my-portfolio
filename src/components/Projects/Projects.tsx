import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Project+1',
      title: 'Project 1',
      description: 'This is a description for project 1. It showcases some amazing work and skills.'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Project+2',
      title: 'Project 2',
      description: 'This is a description for project 2. Another great example of creativity and expertise.'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x300/1a252f/ffffff?text=Project+3',
      title: 'Project 3',
      description: 'This is a description for project 3. Highlighting innovative solutions and design.'
    }
  ];

  return (
    <section id="projects" className="projects py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row g-4">
          {projects.map(project => (
            <div key={project.id} className="col-md-4">
              <div className="card bg-secondary text-light border-0 shadow">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;