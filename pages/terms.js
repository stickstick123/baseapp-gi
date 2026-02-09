import styles from "../styles/Privacy.module.scss"
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";

export default function TextPage() {
  return (
    <>
<Header />
    <div className={styles.container}>
    <h1>Terms & Conditions</h1>
<p>
  Welcome to the website of Basecon Group Pty Ltd ("Company," "we," or "us"). The following terms and conditions ("Terms") govern your access to and use of baseapp.com.au ("Website"), including any content, functionality, and services offered on or through the Website.
</p>
<p>
  By accessing or using our Website, you agree to these Terms. If you do not agree with these Terms, please do not use our Website.
</p>

<section className={styles.section}>
  <h2>Intellectual Property Rights</h2>
  <p>
    All content, features, and functionality on our Website, including text, graphics, logos, icons, images, and software, are the property of Basecon Group Pty Ltd or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
  </p>
  <p>
    You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website without our prior written consent.
  </p>
</section>

<section className={styles.section}>
  <h2>User Conduct</h2>
  <p>By using our Website, you agree not to:</p>
  <p>
    <strong>a.</strong> Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Website.
  </p>
  <p>
    <strong>b.</strong> Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any material on the Website.
  </p>
  <p>
    <strong>c.</strong> Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.
  </p>
  <p>
    <strong>d.</strong> Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.
     </p>
</section>

<section className={styles.section}>
  <h2>Disclaimer of Warranties</h2>
  <p>Our Website and its content are provided on an "as is" and "as available" basis without any warranties of any kind. We disclaim all warranties, including, but not limited to, warranties of merchantability, non-infringement, and fitness for a particular purpose.</p>
</section>

<section className={styles.section}>
  <h2>Limitation of Liability</h2>
  <p>In no event will Basecon Group Pty Ltd, its licensors, or service providers be liable for any damages (including, without limitation, direct, indirect, incidental, consequential, special, or punitive damages) arising from or related to your use of or inability to use the Website.</p>
</section>

<section className={styles.section}>
  <h2>Indemnification</h2>
  <p>You agree to indemnify, defend, and hold harmless Basecon Group Pty Ltd, its licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) resulting from your violation of these Terms or your use of the Website.</p>
</section>

<section className={styles.section}>
  <h2>Changes to These Terms</h2>
  <p>We reserve the right to update or modify these Terms at any time without prior notice. All changes are effective immediately when posted. Your continued use of our Website following the posting of revised Terms means that you accept and agree to the changes.</p>
</section>

<section className={styles.section}>
  <h2>Contact Information</h2>
  <p>If you have any questions or concerns about these Terms, please contact us at admin@basecongroup.com.au</p>
</section>


    </div>

    <Footer />
    </>
  );
}
