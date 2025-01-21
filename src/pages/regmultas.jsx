import React, { useState } from "react";
import "../styles/regmultas.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="role">Administrador</div>
      <div className="menu-item"><a href="/buscador">Buscador</a></div>
      <div className="menu-item"><a href="/regpagos">Registro de pagos</a></div>
      {/* <div className="menu-item"><a href="/regmultas">Registro de multas</a></div> */}
      <div className="menu-item">Gestión de permisos</div>
    </div>
  );
};

const MultaRegistro = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="multa-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="multa-header">
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>Registro De Multas</h1>
      </div>
      <div className="multa-content">
        <div className="multa-left-section">
          <div className="multa-field">
            <label>Coto No.</label>
            <span>54</span>
          </div>
          <div className="multa-field">
            <label>Monto De La Multa:</label>
            <span>$100.°°</span>
          </div>
        </div>
        <div className="multa-right-section">
          <div className="multa-field">
            <label>Fecha De La Multa:</label>
            <span>05/11/24</span>
          </div>
          <div className="multa-description">
            <label>Descripción De La Multa:</label>
            <p>Ensució el patio de los vecinos y se negó a limpiar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultaRegistro;
