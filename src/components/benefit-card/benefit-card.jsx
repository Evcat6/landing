import styles from "./styles.module.css";

const BenefitCard = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export { BenefitCard };
