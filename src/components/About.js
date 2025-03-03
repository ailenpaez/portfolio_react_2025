import React from 'react';

// Asegúrate de que la ruta del archivo de la imagen sea correcta
import perfil from '../assets/paezailen.png'; // Cambia la ruta según la ubicación de tu imagen

function About() {
  return (
    <section id="about">
      <h2>Ailén Páez</h2>
      <p>Estudiante Desarrollo de Software | QA Manual | Backend Developer</p>
      
      {/* Imagen de perfil */}
      <img src={perfil} alt="Ailén Páez" className="about-photo" />
      
      <h3>Skills</h3>
      <div className="skills">
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>Python</span>
        <span>Node.js</span>
        <span>React</span>
        <span>SQL</span>
        <span>Sequelize</span>
      </div>
    </section>
  );
}

export default About;

