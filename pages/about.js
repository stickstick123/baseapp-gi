import styles from "../styles/About.module.scss"
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";

export default function TextPage() {
  return (
    <>
<Header />
    <div className={styles.container}>
      <h1>Who are we?</h1>
      <p>
        Combining traditional face-to-face support with modern tech efficiency, BASEAPP simplifies software for tradespeople across Australia, enhancing their workday with straightforward solutions.
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          Our cornerstone is clear: to simplify job management across all trades. BASEAPP is designed to save you time and money, while boosting your efficiency. By crafting a user-friendly, customizable solution, we aim to ensure you never miss a beat – or a billing opportunity.
        </p>

      </section>

      <section className={styles.section}>
        <h2>Our Vision</h2>
        <p>
         Digital transformation has hit the trades, and BASEAPP is leading the charge. Our vision is a future where every tradesperson, whether they're up a ladder or down a trench, has the tools they need to succeed without being bogged down by paperwork.
        </p>

      </section>

      <section className={styles.section}>
        <h2>Our Approach</h2>
        <p>
         "Set and forget" isn't in our vocabulary. We believe in a hands-on, personalized approach. Choosing BASEAPP means choosing a partner committed to tailoring our platform to fit your unique business needs. We dive deep into the nitty-gritty of your operations, ensuring our software isn't just another tool, but a cornerstone of your business success.
        </p>
      </section>
    </div>

    <Footer />
    </>
  );
}
