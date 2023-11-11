// SaludoInteractivo.js

import React, { useState } from 'react';

const SaludoInteractivo = () => {
  // Utilizamos el estado para almacenar el nombre
  const [nombre, setNombre] = useState('');
  const[mensaje, setMensaje]=useState('');


  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMensaje(`¡Hola, ${nombre}! Bienvenido al sitio.`);
  };

  return (
    <div>
      <h4>Componente Interactivo de Saludo</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu nombre:
          <input type="text" value={nombre} onChange={handleChange} />
        </label>
        <button type="submit">Saludar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default SaludoInteractivo;