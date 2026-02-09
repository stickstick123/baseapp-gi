import styles from "./scss/SlideshowSection.module.scss";

export default function SlideshowSection() {
  const images = [
    "https://www.baseapp.com.au/images/slides/slide_1.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_2.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_3.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_4.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_5.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_6.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_7.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_8.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_9.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_10.jpeg",
    "https://www.baseapp.com.au/images/slides/slide_11.jpeg",
  ];

  return (
    <section className={styles.section}>
      <Slideshow images={images} delay={-1} />
      <Slideshow images={images} delay={-22} />
      <Slideshow images={images} delay={-8} />
    </section>
  );
}

function Slideshow({ images, delay }) {
  return (
    <div className={styles.column}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={styles.slide}
          style={{
            animationDelay: `${index * 6 + delay}s`,
          }}
        />
      ))}
    </div>
  );
}
