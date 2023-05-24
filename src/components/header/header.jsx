import styles from "./styles.module.css";
import AppLogo from "../../assets/logo.svg";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { HamburgerButton } from "../components";
import { useState } from "react";

const Header = () => {
  const links = [
    { title: "o que fazemos", link: "https://www.google.com/" },
    { title: "como te ajudamos", link: "https://www.google.com/" },
    { title: "fale conosco", link: "https://www.google.com/" },
  ];
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className={styles.header}>
      <div className={styles.hamburger_container}>
        <HamburgerButton open={open} onClick={toggleOpen} />
        {open && (
          <ul className={styles.hamburger_links}>
            {links.map((link, i) => (
              <li key={i}>
                <a className={styles.link} href={link.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <img src={AppLogo} alt="logo" />
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {links.map((link, i) => (
            <li key={i}>
              <a className={styles.link} href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.icons}>
          <BsInstagram />
          <ImFacebook />
        </ul>
      </nav>
    </header>
  );
};

export { Header };
