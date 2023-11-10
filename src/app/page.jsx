import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/main.gif";
// import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
           college connect 
        </h1>
        <p className={styles.desc}>
        Guiding your journey to success through curated notes, 
        exciting internships,and valuable events. 
        Elevate your path with us.
        </p>
        <button className={styles.op} url="/internships" text="services and opportunties">Join us</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
