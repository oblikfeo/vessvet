import styles from "./recommended.module.css";
import yellowArrow from "../../../public/img/yellowArrow.png"
import add from "../../../public/img/add.png"
import item1 from "../../../public/img/item1.png"
import item2 from "../../../public/img/item2.png"
import item3 from "../../../public/img/item3.png"
import item4 from "../../../public/img/item4.png"
import leftarrow from "../../../public/img/leftarrow.png"
import rightarrow from "../../../public/img/rightarrow.png"
import Image from "next/image";

export default function Recommended() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <h1>Рекомендуем</h1>
                <div className={styles.link}>
                    <span>Перейти в каталог</span>
                    <Image src={yellowArrow} alt="" />
                </div>
            </div>

            <div className={styles.cards}>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={item1} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}> Светильник настольный под лампу Е27 LE TL-203 черный LEEK </div>
                        <div className={styles.add}>
                            348,00 ₽
                            <Image src={add} className={styles.button} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={item2} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}> Светильник настольный под лампу Е27 LE TL-203 черный LEEK </div>
                        <div className={styles.add}>
                            348,00 ₽
                            <Image src={add} className={styles.button} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={item3} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}> Светильник настольный под лампу Е27 LE TL-203 черный LEEK </div>
                        <div className={styles.add}>
                            348,00 ₽
                            <Image src={add} className={styles.button} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={item4} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}> Светильник настольный под лампу Е27 LE TL-203 черный LEEK </div>
                        <div className={styles.add}>
                            348,00 ₽
                            <Image src={add} className={styles.button} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.pages}>
                <div className={styles.count}>
                    <div className={styles.yellow}>1</div>
                    <div>6</div>
                </div>
                <div className={styles.arrow}>
                    <div><Image src={leftarrow} alt="" /></div>
                    <div><Image src={rightarrow} alt="" /></div>
                </div>
            </div>
        </div>
    );
}
