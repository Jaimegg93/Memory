import React, {useState, useEffect} from 'react';
import Carta from './Carta';

const Tablero = () => {
    const [cartas, setCartas] = useState([]);
    const [cartasGiradas, setCartasGiradas] = useState([]);
    const [primerIndice, setPrimerIndice] = useState(null);
    const [segundoIndice, setSegundoIndice] = useState(null);

    useEffect(() => {
      const cartasIniciales = [
        { id: 1, contenido: 'A', imagen: '/imagenes/anuel.jpg', emparejada: false },
        { id: 2, contenido: 'A', imagen: '/imagenes/anuel.jpg', emparejada: false },
        { id: 3, contenido: 'B', imagen: '/imagenes/anuel.jpg', emparejada: false },
        { id: 4, contenido: 'B', imagen: '/imagenes/anuel.jpg', emparejada: false }
      ];
    
        setCartas(cartasIniciales);
    }, []);



    const clickCarta = (indice) => {

        if (cartasGiradas.length === 0) {
            setCartasGiradas([indice]);
            setPrimerIndice(indice);
        } 
        else if (cartasGiradas.length === 1) {

            setCartasGiradas([...cartasGiradas, indice]);
            setSegundoIndice(indice);
    
          const primeraCarta = cartas[primerIndice];
          const segundaCarta = cartas[indice];

          if (primeraCarta.contenido === segundaCarta.contenido) {
            actualizarCartas(cartas);
          } 
        }
    };

    const actualizarCartas = (cartasActuales) => {
    const nuevasCartas = cartasActuales.map((carta, indice) => {

      if (indice === primerIndice || indice === segundoIndice) {
        return { ...carta, emparejada: true };
      } else {
        return carta;
      }
    });
    setCartas(nuevasCartas);
  };

  return (
    <div className="tablero">
      {cartas.map((carta, indice) => (
        <Carta
          key={carta.id}
          imagen={carta.imagen}
          girada={cartasGiradas.includes(indice) || carta.emparejada}
          alHacerClick={() => clickCarta(indice)}
        />
      ))}
    </div>
  );
};

export default Tablero;
