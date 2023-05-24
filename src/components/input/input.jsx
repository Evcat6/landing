import styles from "./styles.module.css";

const Input = ({ type, label, placeholder, required = false }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}:</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export { Input };
