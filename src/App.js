

// App.js
import React from 'react';
import SaludoInteractivo from './componentes/SaludoInteractivo'; 
import './estilos.css';

const App = () => {
  return (
    <div className="container">
      <h1>¡Nuestra App Interactiva de Saludo!
        < SaludoInteractivo/>
      </h1>
    </div>
  );
};

export default App;
