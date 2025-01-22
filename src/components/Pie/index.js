import { Link } from "react-router-dom";
import styles from "./Pie.module.css";
import logo from "./logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Pie = () => (
    <footer className={styles.pieContainer}>
        <section className={styles.pieLogo}>
            <Link to="/"><img src={logo} alt="Logo FOOD Flix" /></Link>
        </section>

        <section className={styles.pieInfo}>
            <p className={styles.pieTexto}>
            DESARROLLADO con ❤️ por Maria Garcia
            </p>
            <span className={styles.pieSocial}>
                <a href="https://www.linkedin.com/in/maria-v-garcia-riveros/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/YokoMari" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </span>

        </section>
    </footer>
);

export default Pie;