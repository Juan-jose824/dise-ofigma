import '../styles/login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <form className="login-form">
          <input type="text" placeholder="Ingrese su número de Teléfono" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Entrar</button>
        </form>
        <div className="register-box">
          <p>¿No tienes cuenta? <a href="#">Crea una cuenta</a></p>
          <button className="register-button">Regístrate</button>
        </div>
      </div>
      <div className="login-right">
        <h2>Condominios</h2>
        <p>
          Bienvenidos a los condominios, lugar donde podrás disfrutar de un vecindario cómodo y relajante, y apartamentos limpios con buenas comodidades.
        </p>
      </div>
    </div>
  );
}

export default Login;
