import Link from "next/link";
import Image from "next/image";
import styles from "../app/styles/header.module.css";

import { RiMentalHealthLine } from "react-icons/ri";

export default function Header() {
  return (
    <main className={styles.all}>
      <header className={styles.header}>
        {/* Ícone da instituição no canto direito */}
        <div className={styles.logo}>
          <RiMentalHealthLine className={styles.ico} />
        </div>

        {/* Botões de navegação no centro */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="https://lacreisaude.com.br/quem-somos/">
                Quem somos
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/pag1">Propósito</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="https://lacreisaude.com.br/quem-somos/">About</Link>
            </li>
          </ul>
        </nav>

        {/* Barra de pesquisa no canto esquerdo */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar..."
            className={styles.searchInput}
          />
        </div>
      </header>
    </main>
  );
}
