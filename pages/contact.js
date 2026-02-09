import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    town: "",
    features: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          jobTitle: "",
          town: "",
          features: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
    <Header />
    <section className={styles.contactPage}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                className={styles.inputField}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email Address*</label>
              <input
                id="email"
                className={styles.inputField}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          

          
            <div className={styles.field}>
              <label htmlFor="phone">Phone Number*</label>
              <input
                id="phone"
                className={styles.inputField}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                className={styles.inputField}
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
         

         
            <div className={styles.field}>
              <label htmlFor="jobTitle">Job Title</label>
              <input
                id="jobTitle"
                className={styles.inputField}
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="town">Town / City</label>
              <input
                id="town"
                className={styles.inputField}
                type="text"
                name="town"
                value={formData.town}
                onChange={handleChange}
              />
            </div>
         

          <div className={styles.field}>
            <label htmlFor="features">What features are you looking for? Additional comments</label>
            <textarea
              id="features"
              className={styles.textAreaField}
              name="features"
              value={formData.features}
              onChange={handleChange}
            />
          </div>
</div>


          <p className={styles.disclaimer}>
            By submitting, you are agreeing to the processing of your personal
            information as described in our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        <p className={styles.disclaimer}>
            * indicates a required field.
          </p>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>

          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </section>

    <Footer />
    </>
  );
}
