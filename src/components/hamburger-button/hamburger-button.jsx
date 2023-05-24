import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import styles from "./styles.module.css";

const HamburgerButton = ({ onClick, open }) => {
  return (
    <div className={styles.container}>
      {open ? (
        <GrClose className={styles.hamburger_icon} onClick={onClick} />
      ) : (
        <RxHamburgerMenu className={styles.hamburger_icon} onClick={onClick} />
      )}
    </div>
  );
};

export { HamburgerButton };
