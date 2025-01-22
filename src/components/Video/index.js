import styles from "./Video.module.css";
import { BsTrashFill, BsPencilFill, BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Video = ({ datos, tag, color, sombra, eliminarVideo, manejarEdicionVideo, esFavoritos }) => {
    const { id, titulo, categoria, imagen, link, descripcion } = datos;

    const colorBorde = {
        borderColor: color,
        boxShadow: sombra
    };

    const handleEliminarClick = () => {
        eliminarVideo(id);
    };

    const handleEditarClick = () => {
        manejarEdicionVideo({ id, titulo, categoria, imagen, link, descripcion });
    };

    return (
        <div className={styles.containerShadow}>
            <div className={styles.container} style={colorBorde}>
                <Link className={styles.link} to={`/${id}`}>
                    <img src={imagen} alt={titulo} className={styles.imagen} />
                    <h2>{titulo}</h2>
                </Link>
                <div className={styles.cardFooter}>
                    <span
                        className={`${styles.icon} ${esFavoritos ? styles.ocultar : ""}`}
                        onClick={handleEliminarClick}>
                        <BsTrashFill /><p>Eliminar</p>
                    </span>
                    <span
                        className={`${styles.icon} ${esFavoritos ? styles.ocultar : ""}`}
                        onClick={handleEditarClick}>
                        <BsPencilFill /><p>Editar</p>
                    </span>
                    <span>
                        <Link 
                        className={`${styles.ocultarReproducir} ${esFavoritos ? styles.mostrarReproducir : ""}`}
                        to={`/${id}`}><BsFillPlayFill />Reproducir</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Video;



