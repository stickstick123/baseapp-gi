import { Noto_Sans } from "next/font/google";
import styles from "./scss/Paragraph.module.scss";

// Configuramos la fuente
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Paragraph({ text }) {
  return <h1 className={`${styles.paragraph} ${notoSans.className}`}>{text}</h1>;
}