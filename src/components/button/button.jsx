import styles from "./styles.module.css";
import { ButtonType } from "../../common/enums/enums";
import classNames from "classnames";

const Button = ({ children, type = ButtonType.PRIMARY, ...props }) => {
  const buttonClassName = classNames(styles.button, styles[type]);
  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};

export { Button };
