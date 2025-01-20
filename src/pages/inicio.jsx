import React, { useState } from 'react';
import "../styles/inicio.css";

// Componentes para la barra de navegación, menú lateral y carrusel
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="role">Dueño</div>
      <div className="menu-item">Inquilinos</div>
      <div className="menu-item">Cotos</div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="carousel">
      <h2>Inquilinos</h2>
      <div className="carousel-images">
        <div className="carousel-item">Inquilino 1</div>
        <div className="carousel-item">Inquilino 2</div>
        <div className="carousel-item">Inquilino 3</div>
        <div className="carousel-item">Inquilino 4</div>
        <div className="carousel-item">Inquilino 5</div>
        <div className="carousel-item">Inquilino 6</div>
      </div>
    </div>
  );
};

const NotificationList = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    { title: 'Coto 1', description: 'Pago: Sí', imageUrl: 'image1.jpg', comment: 'Requiere revisión en el área común.' },
    { title: 'Coto 2', description: 'Pago: No', imageUrl: 'image2.jpg', comment: 'No hay comentarios adicionales.' },
  ];

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <div className="notification-list">
      <h3>Notificaciones</h3>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification, index) => (
            <tr key={index} onClick={() => handleNotificationClick(notification)}>
              <td><img src={notification.imageUrl} alt={notification.title} /></td>
              <td>{notification.title}</td>
              <td>{notification.description}</td>
              <td><button>...</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedNotification && (
        <div className="modal">
          <h4>{selectedNotification.title}</h4>
          <p><strong>Descripción:</strong> {selectedNotification.description}</p>
          <p><strong>Comentario:</strong> {selectedNotification.comment}</p>
          <button onClick={() => setSelectedNotification(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

const PageHeader = ({ toggleSidebar }) => {
  return (
    <header className="page-header">
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
      <h1>Vista General</h1>
    </header>
  );
};

const Inicio = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="page-container">
      <PageHeader toggleSidebar={toggleSidebar} />
      <div className="content">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Carousel />
          <NotificationList />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
