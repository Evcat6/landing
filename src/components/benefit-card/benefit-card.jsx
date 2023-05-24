import styles from "./styles.module.css";
import PlusCircle from '../../assets/plus-circle.svg';

const BenefitCard = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imageSrc} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <img className={styles.plus_circle} src={PlusCircle} />
    </div>
  );
};

export { BenefitCard };
