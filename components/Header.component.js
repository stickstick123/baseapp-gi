import { useState, useEffect } from "react";
import styles from "./scss/Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
            <Link href="/">
          <img src="./logo black 1.png" alt="Logo" />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
<Link href="/features" className={styles.navLink}>Features</Link>
<Link href="/about" className={styles.navLink}>About Us</Link>
<Link href="https://jobs.baseapp.com.au/login/?next=/" passHref>
  <button className={styles.secondaryBtn}>Login</button>
</Link>
<Link href="/contact" passHref>
  <button className={styles.secondaryBtn}>Contact Us</button>
</Link>
        </nav>

        <div
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Overlay para mobile */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
    </header>
  );
}
