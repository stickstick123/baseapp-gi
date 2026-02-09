import styles from "./scss/HorizontalScroll.module.scss";

export default function HorizontalScroll({ images }) {
  return (
    <section className={styles.scrollSection}>
      <div className={styles.scroller}>
        {/* Duplicamos las imágenes para el scroll infinito */}
        {[...images, ...images].map((url, index) => (
          <div className={styles.item} key={index}>
            <img src={url} alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
