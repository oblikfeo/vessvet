import styles from "./stock.module.css";
import item1 from "../../../public/img/item1.png"
import item2 from "../../../public/img/item2.png"
import item3 from "../../../public/img/item3.png"
import item4 from "../../../public/img/item4.png"
import add from "../../../public/img/add.png"
import line2 from "../../../public/img/line2.png"
import ellipse from "../../../public/img/ellipse.png"
import leftarrow2 from "../../../public/img/leftarrow2.png"
import rightarrow from "../../../public/img/rightarrow.png"
import Image from "next/image";

export default function Stock() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.menu}>
                <div>Акции</div>
                <span>Новинки</span>
                <span>Хит</span>
                <Image className={styles.line} src={line2} alt="" />
                <Image className={styles.ellipse} src={ellipse} alt="" />
            </div>
            <div>
                <div className={styles.cards}>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src={item1} alt="" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}>  Светильник настольный под лампу Е27 LE TL-203 черный LEEK </div>
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
                            <div className={styles.name}> Пробка-автомат ПАР 10А </div>
                            <div className={styles.add}>
                                59,00 ₽
                                <Image src={add} className={styles.button} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src={item3} alt="" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}> Гирлянда LED нить 2м, теплый свет, AA ENIN-2B Эра, IP20 </div>
                            <div className={styles.add}>
                                149,50 ₽
                                <Image src={add} className={styles.button} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src={item4} alt="" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}> Лампа светодиодная<br></br> А60-10W-865-E27 R E27 10Вт груша холод.дневной свет ЭРА </div>
                            <div className={styles.add}>
                                59,50 ₽
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
                        <div><Image src={leftarrow2} alt="" /></div>
                        <div><Image src={rightarrow} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}