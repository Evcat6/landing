import styles from "./styles.module.css";
import { BenefitCard } from "../components";
import Target from "../../assets/target.svg";
import Ethereum from "../../assets/ethereum-coin.svg";
import CreditCard from "../../assets/credit-card.svg";

const Information = () => {
  const benefits = [
    {
      imageSrc: Target,
      title: "Rápido",
      description:
        "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
    },
    {
      imageSrc: Ethereum,
      title: "Do seu jeito",
      description:
        "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
    },
    {
      imageSrc: CreditCard,
      title: "Como você queria",
      description:
        "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.benefits_container}>
        <h1 className={styles.benefits_title}>
          Um subtítulo para quem rolou até aqui!
        </h1>
        <p className={styles.benefits_subtitle}>
          Aproveite esta seção para destacar os benefícios do seu produto ou
          serviço. Palavras-chave ajudam no SEO.
        </p>
        <div className={styles.items_container}>
          {benefits.map((benefit, i) => (
            <BenefitCard
              imageSrc={benefit.imageSrc}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Information };
