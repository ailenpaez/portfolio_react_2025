import React from "react";
import "../App.css";
import pf from "../assets/portafolio.png";

function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <div className="typing-container">
        <img src={pf} alt="Portfolio Icon" className="title-icon" />
        <h1 className="typing-animation">Bienvenidos a mi Portafolio!</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#studies">Estudios</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      {/* Botón para cambiar de tema */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
    </header>
  );
}

export default Header;