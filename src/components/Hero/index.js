import styles from "./Hero.module.css";

function Hero({ img }) {
    const backgroundImageStyle = { backgroundImage: `url("img/hero-${img}.png")` };

    return (
        <div className={styles.imagen} style={backgroundImageStyle}>
            <section className={styles.texto}>
                <h1>
                    <strong>FRONT END</strong>
                </h1>
                <h2>
                    Challenge React
                </h2>
                <h2>
                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </h2>
            </section>
        </div>
    );
};

export default Hero;