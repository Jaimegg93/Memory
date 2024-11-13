import React, {useState, useEffect} from 'react';
import Carta from './Carta';

const Tablero = () => {
    const [cartas, setCartas] = useState([]);
    const [cartasGiradas, setCartasGiradas] = useState([]);

    useEffect(() => {
        const cartasIniciales = [
            {id: 1, contenido: 'A'}, {id: 2, contenido: 'A'}, 
            {id: 3, contenido: 'B'}, {id: 4, contenido: 'B'}
        ];
        setCartas(cartasIniciales);
    })

    const clickCarta = (indice) => {
        const nuevasCartasGiradas = [...cartasGiradas, indice];
        setCartasGiradas =nuevasCartasGiradas
    }

    if(nuevasCartasGiradas.length === 2){
        const [primerIndice, segundoIndice] = nuevasCartasGiradas;
        if (cartas[primerIndice].contenido === cartas[segundoIndice].contenido){
            setCartas((cartasPrevias) =>
            cartasPrevias.map((carta,i) =>
            )
            )
        }
    }

}