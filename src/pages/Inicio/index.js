import { useState } from "react";
import styles from "./index.module.css";
import Hero from "components/Hero";
import Formulario from "components/Formulario";
import { useFormulario } from "context/FormularioContext";
import Categoria from "components/Categoría";
import ModalEditar from "components/ModalEditar";
import videosData from "data/videos.js";

//ESTAS EN LA RAMA MAIN
const categorias = [
    { tag: "FRONT-END", color: "#6bd1ff", sombra: "0px 0px 5px 3px rgba(0, 140, 255, 0.87)"},
    { tag: "BACK-END", color: "#00c86f", sombra: "0px 0px 5px 3px rgba(0, 241, 133, 0.87)"},
    { tag: "INNOVACIÓN Y GESTIÓN", color: "#ffba05", sombra: "0px 0px 5px 3px rgba(242, 177, 0, 0.87)"}
];

function Inicio() {
    const { mostrarFormulario } = useFormulario();
    const [videos, setVideos] = useState(videosData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoAEditar, setVideoAEditar] = useState(null);
    const categoriasTags = categorias.map((categoria) => categoria.tag);

    const registrarVideo = (video) => setVideos([...videos, video]);

    const eliminarVideo = (id) => setVideos(videos.filter((video) => video.id !== id));

    const manejarEdicionVideo = (video) => {
        setVideoAEditar(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoAEditar(null);
    };

    const actualizarVideo = (videoActualizado) => {
        setVideos(videos.map((v) => (v.id === videoActualizado.id ? videoActualizado : v)));
        closeModal();
    };

    return (
        <div className={styles.container}>
            <Hero img="home" />
            <section className={styles.containerContenido}>
                {mostrarFormulario && (
                    <Formulario
                        categorias={categoriasTags}
                        registrarVideo={registrarVideo}
                    />
                )}

                {isModalOpen && videoAEditar && (
                    <ModalEditar
                        video={videoAEditar}
                        closeModal={closeModal}
                        categorias={categoriasTags}
                        actualizarVideo={actualizarVideo}
                    />
                )}

                <div className={styles.containerCategorias}>
                    {categorias.map((categoria) => (
                        <Categoria
                            datos={categoria}
                            key={categoria.tag}
                            videos={videos.filter((video) => video.categoria === categoria.tag)}
                            eliminarVideo={eliminarVideo}
                            manejarEdicionVideo={manejarEdicionVideo}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Inicio;