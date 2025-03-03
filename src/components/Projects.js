import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Proyecto 1" />
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto 1.</p>
          <a href="https://github.com/tu-usuario/proyecto1" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Proyecto 2" />
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto 2.</p>
          <a href="https://github.com/tu-usuario/proyecto2" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Proyecto 3" />
          <h3>Proyecto 3</h3>
          <p>Descripción breve del proyecto 3.</p>
          <a href="https://github.com/tu-usuario/proyecto3" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Proyecto 4" />
          <h3>Proyecto 3</h3>
          <p>Descripción breve del proyecto 3.</p>
          <a href="https://github.com/tu-usuario/proyecto3" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
