import styles from "./styles.module.css";
import { NavBar } from "../components";
import { HEADER_LINKS } from "../../data/header-links";
import { NavBarTheme } from "../../common/enums/enums";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.nav_bar_container}>
        <NavBar links={HEADER_LINKS} theme={NavBarTheme.LIGHT} />
      </div>
      <div className={styles.subscribe_container}>
        <p className={styles.subscribe_title}>Receba as novidades do nice</p>
        <div className={styles.subscribe_input_group}>
          <input
            className={styles.subscribe_input_group_input}
            type="text"
            placeholder="nome@email.com"
          />
          <button className={styles.subscribe_input_group_button}>
            Inscrever
          </button>
        </div>
      </div>
      <div className={styles.horizontal_line}></div>
      <span className={styles.sub_title}>
        Nice template by @lopesluiza on Figma - 2021
      </span>
    </footer>
  );
};

export { Footer };
