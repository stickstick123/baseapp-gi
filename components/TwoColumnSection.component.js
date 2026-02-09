import styles from "./scss/TwoColumnSection.module.scss";
import Link from "next/link";

export default function TwoColumnSection() {
  return (
    <section className={styles.section}>
      {/* Columna izquierda */}
      <div className={styles.left}>
        <img
          src="https://www.baseapp.com.au/images/telstra-banner.png"
          alt="Imagen"
          className={styles.image}
        />
        <h2 className={styles.title}>A Growing Community</h2>
        <p className={styles.text}>
          Teams across Australia are showing their love for <b>BASEAPP</b>. A growing community are using it everyday for it's simple to use planning and reporting features, built by a team knows the industry inside and out.
        <br /><br />
          To see how businesses use <b>BASEAPP</b> to supercharge their businesses, and to follow along with our community, check out our instagram for more.
        </p>
        <div className={styles.social}>
            <img src="https://www.baseapp.com.au/images/socials/Instagram_Glyph_White.svg" />
        <Link href="https://instagram.com" target="_blank" className={styles.instagramLink}>
          @BASEAPPAU on Instagram
        </Link>
        </div>
      </div>

      {/* Columna derecha */}
      <div className={styles.right}>
        <div className={styles.videoContainer}>
          <video
            src="https://www.baseapp.com.au/videos/zirc.mp4" // reemplaza con tu video
            controls
            autoPlay
            muted
            loop
            className={styles.video}
          />
        </div>
      </div>
    </section>
  );
}
