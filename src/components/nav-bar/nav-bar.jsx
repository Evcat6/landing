import styles from "./styles.module.css";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { NavBarTheme } from "../../common/enums/enums";
import classNames from "classnames";

const NavBar = ({ links, theme = NavBarTheme.DARK }) => {
  const linkClassName = classNames(styles.link, styles[theme]);
  const themeClassName = classNames(styles[theme]);
  return (
    <>
      <img
        src={theme === NavBarTheme.DARK ? LogoDark : LogoLight}
        alt="logo"
        className={themeClassName}
      />
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {links.map((link, i) => (
            <li key={i}>
              <a className={linkClassName} href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.icons}>
          <BsInstagram className={themeClassName} />
          <ImFacebook className={themeClassName} />
        </ul>
      </nav>
    </>
  );
};

export { NavBar };
