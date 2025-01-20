import React, { useState } from "react";
import "../styles/registro.css";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClearPhone = () => {
    setPhone("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <form className="reg-form">
          <div className="form-grid">
            {/* Nombre completo */}
            <input type="text" placeholder="Nombre Completo" />

            {/* Teléfono con botón para limpiar */}
            <div className="input-container">
              <input
                type="text"
                placeholder="Número de Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phone && (
                <span className="clear-icon" onClick={handleClearPhone}>
                  ✖
                </span>
              )}
            </div>

            {/* Correo */}
            <input type="email" placeholder="Correo" />

            {/* Contraseña con botón para mostrar */}
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          {/* Selección de perfil */}
          <select className="select-profile">
            <option>Seleccione su perfil</option>
            <option>Dueño</option>
            <option>Administrador</option>
            <option>Administración</option>
          </select>

          {/* Botón de entrar */}
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
