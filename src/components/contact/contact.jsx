import styles from "./styles.module.css";
import Chat from "../../assets/chat.svg";
import WhatsApp from "../../assets/whatsapp-icon.svg";
import { Input, Button } from "../components";

const Contact = () => {
  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.container}>
      <img src={Chat} />
      <h1 className={styles.title}>Ainda tem dúvidas? Fale conosco!</h1>
      <div className={styles.contact_container}>
        <div className={styles.contact_left_side}>
          <p className={styles.contact_description}>
            Ofereça um meio de comunicação direto. Pode ser um{" "}
            <a className={styles.desc_link} href="mailto:contato@email.com.br">
              contato@email.com.br
            </a>
          </p>
          <p className={styles.contact_description}>
            Ou crie um formulário ao lado que entrem em contato <span className={styles.contact_description_purple} >o mais rápido possível!</span>
          </p>
          <div className={styles.whatsapp_container}>
            <img src={WhatsApp} />
            <a
              href="https://www.whatsapp.com/"
              className={styles.whatsapp_link}
            >
              Hey! Estamos no whatsapp!
            </a>
          </div>
        </div>
        <form className={styles.contact_right_side} onSubmit={Submit}>
          <Input
            type={"text"}
            required={true}
            label="Name"
            placeholder="Nome Sobrenome"
          />
          <Input
            type={"email"}
            required={true}
            label="Email"
            placeholder="nome@email.com.br"
          />
          <Input
            type={"text"}
            required={true}
            label="Telefone"
            placeholder="21 9988-7766"
          />
          <div className={styles.button_container}>
            <Button>Enviar!</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export { Contact };
