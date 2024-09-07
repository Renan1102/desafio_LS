import s from "../app/styles/footer.module.css";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";

export default function Footer() {
  return (
    <section className={s.footer}>
      <div>
        <div className={s.caixa_footer}>
          <div className={s.sociais}>
            <Link href="https://www.facebook.com/lacrei.saude/">
              <BsFacebook className={s.ico} />
            </Link>

            <Link href="https://www.instagram.com/lacrei.saude">
              <BsInstagram className={s.ico} />
            </Link>

            <Link href="https://www.linkedin.com/company/lacrei/">
              <BsLinkedin className={s.ico} />
            </Link>

            <Link href="https://lacreisaude.com.br/">
              <MdHealthAndSafety className={s.ico} />
            </Link>
          </div>

          <div className={s.infos}></div>
          <div className={s.infos}>
            <div className={s.teste}>
              <p>Ligue para 188 (CVV)</p>
            </div>
          </div>
          <div className={s.infos}>
            <div className={s.teste}>
              <p>ou acesse o site www.cvv.org.br</p>
            </div>
          </div>
          <div className={s.aa}>© Copyright 2024 - Lacrei Sáude</div>
        </div>
      </div>
    </section>
  );
}
