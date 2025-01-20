import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Registro from './pages/registro'; // Asegúrate de importar el componente de registro
import Inicio from './pages/inicio';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  </Router>
);

export default App;


