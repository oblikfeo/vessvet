import styles from "./recommended.module.css";
import yellowArrow from "../../../public/img/yellowArrow.png"
import add from "../../../public/img/add.png"
import item1 from "../../../public/img/client5.png"
import item2 from "../../../public/img/client6.png"
import item3 from "../../../public/img/client7.png"
import item4 from "../../../public/img/client8.png"
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
                        <Image className={styles.contain} src={item1} alt="" width={224} height={266} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}>Кабель АВБШВ 4х240 ож ГОСТ</div>
                        <div className={styles.add}>
                            1555 ₽
                            <Image src={add} className={styles.button} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image className={styles.contain} src={item2} alt="" width={224} height={266} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}>Контактор магнитный 80А катушка управления 220В АС 1НО+1НЗ LC1D</div>
                        <div className={styles.add}>
                            23 999 ₽
                            <Image src={add} className={styles.button} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image className={styles.contain} src={item3} alt="" width={224} height={266} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}>Кронштейн под бандажную ленту для PSL(РКУ) D60-1.5 (на столб) JazzWay</div>
                        <div className={styles.add}>
                            755 ₽
                            <Image src={add} className={styles.button} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image className={styles.contain} src={item4} alt="" width={224} height={266} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.name}>Кабель АВБШв 1х240</div>
                        <div className={styles.add}>
                            555 ₽
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
