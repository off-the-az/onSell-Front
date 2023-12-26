import "./styles/Footer.css";
import Logo from "../assets/buttons/Logo.svg";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div>
          <a href="/">
            <img src={Logo} alt="Logo" className="footer-img" />
          </a>
        </div>
        <div>
          <ul className="footer-nav">
            <li>Політика конфіденційності</li>
            <li>Головна</li>
            <li>Каталог Товарів</li>
            <li>Чати</li>
          </ul>
        </div>
      </section>
    </>
  );
}
