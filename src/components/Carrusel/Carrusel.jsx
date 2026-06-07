import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Carrusel.module.css";
import teleAd from "../../assets/teleAd.jpg";
import hogarAd1 from "../../assets/hogarAd1.jpg";
import tecnologia from "../../assets/electroAd.jpg";

function Carrusel() {
  const [indice, setIndice] = useState(0);
  const navigate = useNavigate();

  const imagenes = [
    { src: teleAd, categoria: "Electrodomésticos" },
    { src: hogarAd1, categoria: "Hogar" },
    { src: tecnologia, categoria: "Tecnología" },
  ];

  const irACategoria = (categoria) => {
    if (categoria) {
      navigate(`/productos?categoria=${categoria}`);
    }
  };
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
                {imagenes.map((item, index) => (
                <img
                    key={index}
                    src={item.src}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => irACategoria(item.categoria)}
                    style={item.categoria ? { cursor: "pointer" } : {}}
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