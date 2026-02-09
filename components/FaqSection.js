import { useState } from "react";
import styles from "./scss/FaqSection.module.scss";

const faqs = [
  {
    question: "1. How do I get started with <strong>BASEAPP</strong>?",
    answer:
      "To begin, simply reach out to us directly. Our friendly sales team will guide you through the process, tailoring <strong>BASEAPP</strong> to fit your business's unique needs.",
  },
  {
    question: "2. Can <strong>BASEAPP</strong> accommodate invoicing for all kinds of jobs?",
    answer: "Yes, <strong>BASEAPP</strong> is versatile enough to handle invoicing for any job type, simplifying your financial management across the board.",
  },
  {
    question: "3. Does <strong>BASEAPP</strong> support team scheduling features?",
    answer:
      "Absolutely! <strong>BASEAPP</strong>'s scheduling is designed to work for teams of any size, making it easy to coordinate and communicate.",
  },
   {
    question: "4. How is pricing determined for <strong>BASEAPP</strong>?",
    answer:
      "Pricing for <strong>BASEAPP</strong> is based on a weekly subscription model that you can cancel anytime. Costs vary depending on the number of users to ensure it perfectly fits your business's size and needs. For a detailed consultation and to find the best plan for you, please call us directly.",
  },
   {
    question: "5. How well does <strong>BASEAPP</strong> integrate with other tools?",
    answer:
      "<strong>BASEAPP</strong> seamlessly integrates with a variety of other software and tools, enhancing your ability to streamline your workflows efficiently.",
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.section}>
        {/* Columna izquierda */}
        <div className={styles.left}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Unlock answers to streamline your trade business operations. From setup queries to integration specifics, discover how <b>BASEAPP</b> simplifies your workflow.
<br /><br />
Can't find the answers you're looking for? Contact us and our friendly support staff will answer your questions.
          </p>
          
          <a href="/contact" className={styles.contactLink}>
            Contact Us
          </a>
        </div>

        {/* Columna derecha */}
   <div className={styles.right}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndexes.includes(index) ? styles.open : ""
              }`}
            >
              <div
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.triangle}></span>
                <span
                  className={styles.questionText}
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
              </div>
              <div
                className={styles.answer}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
