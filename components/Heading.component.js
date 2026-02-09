
import { Staatliches } from 'next/font/google';
import styles from './scss/Heading.module.scss';

const staatliches = Staatliches({ subsets: ['latin'], weight: '400' });

export default function Heading({ text }) {
  return <h1 className={`${styles.heading} ${staatliches.className}`}>{text}</h1>;
}