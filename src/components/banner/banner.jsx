import styles from "./styles.module.css";
import BusinessMan from "../../assets/man-burger.svg";
import { Button } from "../components";

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left_part}>
        <h1 className={styles.title}>Um slogan chamativo aqui.</h1>
        <p className={styles.subtitle}>
          Um texto sobre o seu produto ou serviço. Explique{" "}
          <span className={styles.subtitle_orange}>porque ele é valioso</span> e
          direcione o usuário ao próximo objetivo.
        </p>
        <div className={styles.buttons}>
          <Button>Eu quero!</Button>
          <Button type="secondary">Conhecer mais</Button>
        </div>
      </div>
      <div className={styles.right_part}>
        <div className={styles.blur}></div>
        <img
          className={styles.business_man_img}
          src={BusinessMan}
          alt="business man"
        />
      </div>
    </section>
  );
};

export { Banner };
