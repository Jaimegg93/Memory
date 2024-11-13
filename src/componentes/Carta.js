import React, { useState } from 'react';

const Carta = ({ contenido, girada, onClick }) => {
  return (
    <div className="carta" onClick={onClick}>
      {girada ? contenido : "?"}
    </div>
  );
};

export default Carta;
