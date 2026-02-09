
import styles from "./scss/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Sección superior */}
      <div className={styles.topSection}>
        <p className={styles.topText}>Looking to join the BASEAPP community? See the benefits and get in touch with us today.</p>
        <Link href="/contact" passHref>
  <button className={styles.secondaryBtn}>Contact Us</button>
</Link>
      </div>

      {/* Sección inferior */}
      <div className={styles.bottomSection}>
        {/* Columna logo */}
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
          <Link href="/">
            <img src="/logo black 1.png" alt="Logo" className={styles.logo} />
          </Link>
        </div>
        </div>

        {/* Columna Resources */}
        <div className={styles.column}>
          <h4>Resources</h4>
          <Link href="/features" className={styles.link}>Features</Link>
          <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
          <Link href="/terms" className={styles.link}>Terms and Conditions</Link>
        </div>

        {/* Columna Company */}
        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
          <Link href="/about" className={styles.link}>About Us</Link>
      
        </div>

        {/* Columna Socials */}
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <Link href="https://www.instagram.com/baseappau/" passHref>
              <img src="https://www.baseapp.com.au/images/socials/Instagram_Glyph_White.svg" />
            </Link>
            <Link href="https://www.facebook.com/BASEAPPau/" passHref>
              <img src="https://www.baseapp.com.au/images/socials/Facebook_Logo_Secondary.svg" />
            </Link>
            <Link href="linkedin.com/showcase/baseappau/" passHref>
              <img src="https://www.baseapp.com.au/images/socials/LinkedIn_Logo.svg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
