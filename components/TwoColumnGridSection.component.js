import styles from "./scss/TwoColumnGridSection.module.scss";

export default function TwoColumnGridSection() {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.title}>Integrations</h2>

      <div className={styles.section}>
        {/* Columna izquierda (1/3) */}
        <div className={styles.left}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <img
                src="https://www.baseapp.com.au/images/xero.png"
                alt="Integration 1"
              />
            </div>
            <div className={styles.card}>
              <img
                src="https://www.baseapp.com.au/images/myob.png"
                alt="Integration 2"
              />
            </div>
            <div className={`${styles.card} ${styles.centerCard}`}>
              <img
                src="https://www.baseapp.com.au/images/quickbooks.png"
                alt="Integration 3"
              />
            </div>
          </div>
        </div>

        {/* Columna derecha (2/3) */}
        <div className={styles.right}>
          <p>
            <b>BASEAPP</b> connects with your existing tools for managing finances and communication, so you don't have to juggle multiple apps or make any switches to start using <b>BASEAPP</b> for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
