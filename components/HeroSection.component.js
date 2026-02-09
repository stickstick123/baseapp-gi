import styles from "./scss/HeroSection.module.scss";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      {/* Video de fondo */}
      <video
        className={styles.videoBg}
        src="https://www.baseapp.com.au/videos/BaseappLandingWide.mp4" // reemplaza con tu video
        autoPlay
        muted
        loop
      />

      {/* Overlay de contenido */}
      <div className={styles.content}>
        <h1 className={styles.title}>Job, Project & Community Management System</h1>
        <p className={styles.subtitle}>Built from the industry. Real support. Simple to use.</p>
        <Link href="/contact">
          <button className={styles.ctaButton}>Get In Touch</button>
        </Link>
      </div>
    </section>
  );
}