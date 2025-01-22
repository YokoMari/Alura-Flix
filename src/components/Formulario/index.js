import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Formulario.module.css";
import Banner from "components/Banner";
import Input from "components/Input";
import ListaOpciones from "components/ListaOpciones";
import BotonGuardar from "components/BotonGuardar";
import BotonLimpiar from "components/BotonLimpiar";
import BotonCerrarFormulario from "components/BotonCerrarFormulario";
import DialogoConfirmacion from "components/DialogoConfirmacion";
import { BsFillXCircleFill, BsFillFloppyFill, BsEraserFill } from "react-icons/bs";

const Formulario = ({ registrarVideo, categorias }) => {

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mostrarDialogo, setMostrarDialogo] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevoVideo = {
      id: uuidv4(),
      titulo,
      categoria,
      imagen,
      video,
      descripcion,
    };

    registrarVideo(nuevoVideo);
    limpiarFormulario();
    setMostrarDialogo(true);
  };

  const limpiarFormulario = () => {
    setTitulo("");
    setCategoria("");
    setImagen("");
    setVideo("");
    setDescripcion("");
    setMostrarDialogo(false);
  };

  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <BotonCerrarFormulario type="button" extraClass={styles.btnIconoCerrar}><BsFillXCircleFill /></BotonCerrarFormulario>
        <Banner img="nuevovideo" txt="Nuevo Video" />
        <form className={styles.formulario} onSubmit={manejarEnvio}>
          <Input
            tipo="text"
            placeholder="Ingresá un título para el video"
            required={true}
            valor={titulo}
            setValor={setTitulo}
          />
          <ListaOpciones
            placeholder="Seleccioná una categoría para el video"
            required={true}
            valor={categoria}
            setCategoria={setCategoria}
            categorias={categorias}
          />
          <Input
            tipo="url"
            placeholder="Ingresá la url de la imagen"
            required={true}
            valor={imagen}
            setValor={setImagen}
          />
          <Input
            tipo="url"
            placeholder="Ingresá la url del video"
            required={true}
            valor={video}
            setValor={setVideo}
          />
          <Input
            tipo="texto"
            placeholder="Ingresá una descripción para el video"
            required={false}
            valor={descripcion}
            setValor={setDescripcion}
          />

          <div className={styles.botonesArea}>
            <DialogoConfirmacion
              mensaje="¡La tarjeta de video ha sido creada!"
              abierto={mostrarDialogo}
            />
            <div className={styles.botones}>
              <BotonGuardar><BsFillFloppyFill />Guardar</BotonGuardar>
              <BotonLimpiar type="button" onClick={limpiarFormulario}><BsEraserFill />Limpiar</BotonLimpiar>
              
            </div>
          </div>
        </form>

      </section>
    </div>
  );
}

export default Formulario;

// <BotonCerrarFormulario type="button"><BsFillXCircleFill /> </BotonCerrarFormulario>