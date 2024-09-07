// pages/index.js
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";
//import { Wrapper } from "../components/Wrapper.style";
//import { Title } from "../components/Title.style";
//import { Buttons } from "../components/Buttons.style";
const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.textao}>
          <h1 className={styles.title1}>Bem-vindo à Lacrei Saúde</h1>

          <div className={styles.caixa_buttons}>
            <button className={styles.butt}>
              <Link href="https://lacreisaude.com.br/">
                Visite Lacrei Saúde
              </Link>
            </button>

            <Link href="https://lacreisaude.com.br/quem-somos/#missao-visao-valores">
              <button className={styles.butt}>O que nos motiva</button>
            </Link>
            <Link href="/pag1">
              <button className={styles.butt}>Saber Mais +</button>
            </Link>
          </div>
        </div>
        <img className={styles.logo} src={"./ico.apng"} alt="Logo"></img>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
