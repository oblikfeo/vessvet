import styles from "./reviews.module.css";
import yellowArrow from "../../../public/img/yellowArrow.png"
import Image from "next/image";

export default function Reviews() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>

                <div className={styles.top}>
                    <h1>Отзывы</h1>
                    <div className={styles.link}>
                        <span>Все отзывы</span>
                        <Image src={yellowArrow} alt="" />
                    </div>
                </div>

                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
