import styles from './styles.module.css';

const Input = ({ type, label, placeholder }) => {
  return (
    <div className={styles.container} >
      <label>{label}:</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export { Input };
