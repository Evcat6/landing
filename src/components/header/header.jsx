import styles from "./styles.module.css";
import { HamburgerButton, NavBar } from "../components";
import { HEADER_LINKS } from "../../data/header-links";
import { useState } from "react";

const Header = () => {
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
            {HEADER_LINKS.map((link, i) => (
              <li key={i}>
                <a className={styles.link} href={link.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <NavBar links={HEADER_LINKS} />
    </header>
  );
};

export { Header };
