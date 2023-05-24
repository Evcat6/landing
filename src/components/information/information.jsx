import styles from "./styles.module.css";
import { BenefitCard, Button } from "../components";
import Target from "../../assets/target.svg";
import Ethereum from "../../assets/ethereum-coin.svg";
import CreditCard from "../../assets/credit-card.svg";
import TalkingMan from "../../assets/talking-man.svg";
import BurgerShape from "../../assets/burger-shape.svg";

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
        <div className={styles.benefits_cards}>
          {benefits.map((benefit, i) => (
            <BenefitCard
              key={i}
              imageSrc={benefit.imageSrc}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
      <div className={styles.about_container}>
        <div className={styles.about_left_side}>
          <span className={styles.hashtag_title}>#contecomagente</span>
          <h1 className={styles.about_title}>
            Simples, rápido e do seu jeito.
          </h1>
          <p className={styles.about_description}>
            Mostre os valores da sua marca e como ela pode fazer parte da vida
            do usuário que está lendo. Gerar identificação é a chave para{" "}
            <span className={styles.about_description_purple}>
              conquistar seu cliente.
            </span>
          </p>
          <div className={styles.button_container}>
            <Button>Eu quero!</Button>
          </div>
        </div>
        <div className={styles.about_right_side}>
          <div className={styles.blur}></div>
          <img className={styles.small_burger} src={BurgerShape} />
          <img className={styles.big_burger} src={BurgerShape} />
          <img
            className={styles.business_man_img}
            src={TalkingMan}
            alt="business man"
          />
        </div>
      </div>
    </section>
  );
};

export { Information };
