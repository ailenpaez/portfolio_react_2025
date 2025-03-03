import React from 'react';
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import pdf from "../assets/pdf.png";

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>

      <div className="contact-links">

        {/* Enlace a tu correo Gmail */}
        <a href="mailto:ailenpaez.empleo@gmail.com" className="contact-link">
          <img src={email} alt="Correo Electrónico" className="contact-icon" />
          Correo Electrónico
        </a>

        {/* Enlace a tu LinkedIn */}
        <a href="https://www.linkedin.com/in/paezailenj/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={linkedin} alt="LinkedIn" className="contact-icon" />
          LinkedIn
        </a>

        {/* Enlace para descargar el CV en PDF */}
        <a href="../assets/CVAilenPaez-2025.pdf" download className="contact-link">
          <img src={pdf} alt="Descargar CV (PDF)" className="contact-icon" />
          Descargar mi CV
        </a>
      </div>
    </section>
  );
}

export default Contact;
