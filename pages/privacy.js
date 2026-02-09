import styles from "../styles/Privacy.module.scss"
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";

export default function TextPage() {
  return (
    <>
<Header />
    <div className={styles.container}>
     <h1>Privacy Policy</h1>
<p>
  Effective Date: May 10, 2023
</p>
<p>
  Basecon Group Pty Ltd ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this privacy policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website, [Your Website URL] (the "Website"), and our practices for collecting, using, maintaining, protecting, and disclosing that information.
</p>
<p>
  By accessing or using our Website, you agree to this privacy policy. If you do not agree with our policies and practices, please refrain from using our Website.
</p>

<section className={styles.section}>
  <h2>Information We Collect</h2>
  <p>
    We collect several types of information from and about users of our Website, including but not limited to:
  </p>
  <p>
    <strong>a. Personal Information:</strong> Information that personally identifies you, such as your name, mailing address, email address, telephone number, or any other identifier by which you may be contacted online or offline.
  </p>
  <p>
    <strong>b. Non-personal Information:</strong> Information that does not personally identify you, such as IP address, browser type, operating system, domain name, or details about how you navigate our Website.
  </p>
</section>

<section className={styles.section}>
  <h2>How We Collect Information</h2>
  <p>
    We collect information from you in various ways, including:
  </p>
  <p>
    <strong>a. Directly from you:</strong> When you fill out a form, request a quote, sign up for our newsletter, or communicate with us.
  </p>
  <p>
    <strong>b. Automatically:</strong> As you navigate our Website, we may use cookies, web beacons, or other technologies to collect information about your equipment, browsing actions, and patterns.
  </p>
  <p>
    <strong>c. From third parties:</strong> We may receive information about you from third parties, such as our partners, affiliates, or analytics providers.
  </p>
</section>

<section className={styles.section}>
  <h2>How We Use Your Information</h2>
  <p>We use the information we collect for various purposes, including:</p>
  <p><strong>a.</strong> To provide our services and respond to your requests.</p>
  <p><strong>b.</strong> To improve our Website and its content, functionality, and overall user experience.</p>
  <p><strong>c.</strong> To communicate with you about our products, services, and special offers.</p>
  <p><strong>d.</strong> To analyze Website usage and trends.</p>
  <p><strong>e.</strong> To protect our Website, users, or others and to enforce our terms of service.</p>
  <p><strong>f.</strong> For any other purpose with your consent.</p>
</section>

<section className={styles.section}>
  <h2>Disclosure of Your Information</h2>
  <p>We may disclose your personal information:</p>
  <p><strong>a.</strong> To our subsidiaries and affiliates.</p>
  <p><strong>b.</strong> To contractors, service providers, and other third parties we use to support our business.</p>
  <p><strong>c.</strong> To comply with any court order, law, or legal process, including responding to government or regulatory requests.</p>
  <p><strong>d.</strong> To enforce our terms of service or protect our rights, property, or safety, as well as the rights, property, or safety of our users or others.</p>
  <p><strong>e.</strong> For any other purpose disclosed by us when you provide the information or with your consent.</p>
</section>

<section className={styles.section}>
  <h2>Your Choices and Access to Your Information</h2>
  <p>
    You may review, correct, update, or delete your personal information by contacting us. Please note that we may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
  </p>
</section>

<section className={styles.section}>
  <h2>Data Security</h2>
  <p>
    We have implemented measures designed to secure your personal information from accidental loss and unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your personal information transmitted to our Website, and any transmission is at your own risk.
  </p>
</section>

<section className={styles.section}>
  <h2>Changes to Our Privacy Policy</h2>
  <p>
    We may update our privacy policy from time to time. All changes will be posted on this page, and we will update the "Effective Date" at the top of this privacy policy. Your continued use of our Website following the posting of changes constitutes your acceptance of such changes.
  </p>
</section>

    </div>

    <Footer />
    </>
  );
}
