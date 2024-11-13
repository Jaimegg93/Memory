import React from 'react';

const Carta = ({ imagen, volteada, alHacerClick }) => {
  return (
    <div className="carta" onClick={alHacerClick}>
      {volteada ? (
        <img src={imagen} alt="Carta" />
      ) : (
        <img src="/imagenes/carta.jpg" alt="Carta Boca Abajo" />
      )}
    </div>
  );
};

export default Carta;
