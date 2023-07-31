import { useEffect, useState } from "react";

// esta función la uso para hacer una espera en la busqueda de lo que tipea el usuario y la consulta a mi api
export const useDebounce = (value, delay) => {
  // posee 2 parámetros:
  // 1- value: lo ingresado por el usuario
  // 2- delay: el tiempo de espera para hacer la petición

  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // al esperar un determinado tiempo tenemos que usar setTimeOut()
    // setTimeout tiene 2 parámetros: la función y el tiempo de espera
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // el retorno de la función de setTimeOut()
    return () => {
      // le pasamos la referencia o ejecución de setTimeOut en handler
      //  que es lo q se va a ejecutar cada vez que el usuario escriba en el input
      clearTimeout(handler);
    };
  }, [value, delay]);
  // retorno de la función  useDebounce()
  return debounceValue;
};
