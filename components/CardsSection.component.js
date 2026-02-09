import styles from "./scss/CardsSection.module.scss";

const cards = [
  {
    title: "Project and Job Management",
    paragraphs: [
      "Manage every aspect of doing your job, to ensure things are completed on time and on budget.",
      "Keep everyone on the same page, and empower people on-site with the information they need."
    ],
    list: ["Job Tracking", "Job Budgeting", "Variation Tracking", "Profit Reports"],
    image: "https://www.baseapp.com.au/images/features/job-management.jpeg"
  },
  {
    title: "Communication and Scheduling",
    paragraphs: [
      "Facilitate seamless communication and efficient scheduling to keep your projects on track.",
      "Use advanced tools to coordinate team efforts, manage staff availability, and ensure important updates are automatically communicated to team members and clients, all accessible through our convenient mobile app."
    ],
    list: ["Job & Staff Scheduling", "Automated Messaging", "On-site Reporting"],
    image: "https://www.baseapp.com.au/images/features/communication-scheduling.jpeg"
  },
    {
    title: "Client and Subcontractor Relations",
    paragraphs: [
      "Strengthen your business relationships with robust management tools that simplify interactions and customization for clients and subcontractors alike. Personalize your onboarding experience and adjust the platform's functionality to meet specific service demands, enhancing user satisfaction.",
    
    ],
    list: ["Client & Subcontractor Management", "Customized Onboarding"],
    image: "https://www.baseapp.com.au/images/features/client-subcontractor.jpeg"
  },
    {
    title: "Real Support",
    paragraphs: [
      "Enjoy peace of mind with ongoing support and detailed resources designed to help you leverage BASEAPP's full potential. Our team is committed to providing assistance whenever and wherever you need it, ensuring you can focus on your business without any disruptions.",

    ],
    list: ["Continuous 24/7 Support", "Comprehensive In-Person Training", "On-site Reporting"],
    image: "https://www.baseapp.com.au/images/features/demo.jpg"
  }
];

export default function CardsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Baseapp Features</h2>

      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.left}>
              <h3>{card.title}</h3>
              <div className={styles.divider}></div>

              {card.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              <ul>
                {card.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.right}>
              <img src={card.image} alt={card.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
