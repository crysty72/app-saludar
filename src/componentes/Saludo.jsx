
// Saludo.js

import React from 'react';

const Saludo = ({ nombre }) => {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Bienvenido al sitio.</p>
    </div>
  );
};


export default Saludo;