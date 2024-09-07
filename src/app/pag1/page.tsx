import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../styles/pag1.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.textao}>
          <h1 className={styles.title1}>Nosso propósito</h1>
          <div className={styles.text_main}>
            A Lacrei Saúde facilita a conexão entre pessoas da comunidade
            LGBTQIAPN+ que precisam de atendimento clínico a profissionais da
            saúde.
            <div className={styles.text_main}>
              Buscamos proporcionar um atendimento de qualidade, sustentado
              pelos pilares da inclusão, representatividade e segurança.
            </div>
          </div>
        </div>
        <img className={styles.logo} src={"./pg1_logo.png"} alt="Logo"></img>
      </main>
      <Footer />
    </div>
  );
}
