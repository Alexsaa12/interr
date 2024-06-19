import Image from "next/image"
import styles from "./page.module.css";
import HomeEG from "./home/components/HomePage";
export default function Home() {
  return (
    <main className={styles.main}>
        <HomeEG></HomeEG>
    </main>
  );
}
