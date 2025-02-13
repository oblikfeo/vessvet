import Header from "@/components/header/header";
import styles from "./page.module.css";
import Recommended from "@/components/recommended/recommended";
import Request from "@/components/request/request";
import Stock from "@/components/stock/stock";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Recommended />
      <Request />
      <Stock />
      <Reviews />
    </div>
  );
}
