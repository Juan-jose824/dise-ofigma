import React, { useState } from "react";
import "../styles/buscador.css";

const Buscador = () => {
  const [searchText, setSearchText] = useState("");
  const [showFilters, setShowFilters] = useState(false); // Nuevo estado para mostrar el modal de filtros
  const [selectedFilter, setSelectedFilter] = useState(""); // Para guardar el filtro seleccionado

  const handleClear = () => {
    setSearchText(""); // Limpia el texto del buscador
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Muestra u oculta el modal de filtro
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter); // Establece el filtro seleccionado
    setShowFilters(false); // Cierra el modal después de seleccionar
  };

  return (
    <div className="container">
      <div className="header">
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Input text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button className="clear-button" onClick={handleClear}>
              ✖
            </button>
          )}
        </div>
        <button className="filter-button" onClick={toggleFilters}>
          📤
        </button>
        <button className="send-button">🔍</button>
      </div>

      {/* Si hay un filtro seleccionado, lo mostramos en el buscador */}
      {selectedFilter && (
        <div className="selected-filter">
          <strong>Filtro seleccionado: {selectedFilter}</strong>
        </div>
      )}

      {/* Modal de filtros, solo se muestra si showFilters es true */}
      {showFilters && (
        <div className="filter-modal">
          <div className="filter-options">
            <button onClick={() => handleFilterSelect("Multas")}>Multas</button>
            <button onClick={() => handleFilterSelect("Pagos")}>Pagos</button>
          </div>
        </div>
      )}

      {/* Tarjetas de contenido */}
      <div className="card multas">
        <h2>Multas</h2>
        <div className="item">
          <div className="icon">▲</div>
          <div className="text">
            <strong>Coto No. 54</strong>
            <p>Multa del día 05/11/24</p>
          </div>
          <button className="menu-button">⋮</button>
        </div>
        <div className="item">
          <div className="icon">▲</div>
          <div className="text">
            <strong>Coto No. 23</strong>
            <p>Multa del día 03/05/23</p>
          </div>
          <button className="menu-button">⋮</button>
        </div>
      </div>

      <div className="card pagos">
        <h2>Pagos</h2>
        <div className="item">
          <div className="icon">▲</div>
          <div className="text">
            <strong>Pago Coto No. 34</strong>
            <p>Pago realizado el día 18/12/24</p>
          </div>
          <button className="menu-button">⋮</button>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
