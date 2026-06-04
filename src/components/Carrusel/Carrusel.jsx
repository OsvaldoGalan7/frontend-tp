import { useState } from "react";
import styles from "./Carrusel.module.css";
import teleAd from "../../assets/teleAd.jpg";

function Carrusel() {
  const [indice, setIndice] = useState(0);

  const imagenes = [
    teleAd,
    teleAd,
    teleAd,
    teleAd
  ];
  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };
  return (
        <div className={styles.slider}>

            <button onClick={anterior}>
                Atras
            </button>

            <div className={styles.contenedor}>
            <div
                className={styles.track}
                style={{
                transform: `translateX(-${indice * 100}%)`
                }}
            >
                {imagenes.map((imagen, index) => (
                <img
                    key={index}
                    src={imagen}
                    alt={`Imagen ${index + 1}`}
                />
                ))}
            </div>
            </div>

            <button onClick={siguiente}>
                Siguiente
            </button>

        </div>
);
}

export default Carrusel;