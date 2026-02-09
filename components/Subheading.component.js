
import { Noto_Sans } from "next/font/google";
import styles from "./scss/Subheading.module.scss";

// Configuramos la fuente
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Subheading({ text }) {
  return <h1 className={`${styles.subheading} ${notoSans.className}`}>{text}</h1>;
}