import styles from "./scss/VideoGridSection.module.scss";

export default function VideoGridSection() {
  return (
    <section className={styles.section}>
        <div className={styles.title}>What sets us apart</div>

        <div className={styles.container}>
      
      {/* Columna izquierda - Video */}
      <div className={styles.videoColumn}>
        <video
          src="https://www.baseapp.com.au/videos/sizzle.mp4" 
          autoPlay
          muted
          loop
          controls
          className={styles.video}
        />
      </div>

      {/* Columna derecha - Grid */}
      <div className={styles.gridColumn}>
        <div className={styles.gridItem} >
        <img src={"https://cdn-icons-png.flaticon.com/256/16/16980.png"} className={styles.bgImage} />
          <div className={styles.overlay}>
            <h3>Real Support</h3>
            <p>BASEAPP is built on providing real, human support to the businesses using our system.</p>
          </div>
        </div>

        <div className={styles.gridItem} style={{ backgroundImage: "url('https://via.placeholder.com/600x600')" }}>
          <div className={styles.overlay}>
            <h3>Simple On-Site App</h3>
            <p>At the core of everything, there's one thing BASEAPP is designed to be above all: Simple.</p>
          </div>
        </div>

        <div className={styles.gridItem} style={{ backgroundImage: "url('https://via.placeholder.com/600x600')" }}>
          <div className={styles.overlay}>
            <h3>Relevant To The Industry</h3>
            <p>BASEAPP is built by people who have worked in the industry, and know the struggles of running a business.</p>
          </div>
        </div>

        <div className={styles.gridItem} style={{ backgroundImage: "url('https://via.placeholder.com/600x600')" }}>
          <div className={styles.overlay}>
            <h3>Invoicing & Scheduling</h3>
            <p>From your computer, or from your phone, BASEAPP helps you manage schedules and billing in the same place you do your work.</p>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}
