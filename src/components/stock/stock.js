import styles from "./stock.module.css";
import item1 from "../../../public/img/client1.png"
import item2 from "../../../public/img/client2.png"
import item3 from "../../../public/img/client3.png"
import item4 from "../../../public/img/client4.png"
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
                            <Image className={styles.contain} src={item1} alt="" width={224} height={266} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Лампа МГЛ 150W G12 NDL/942 220В PB HCI-T Osram прозрачная холодная</div>
                            <div className={styles.add}>
                                1455 ₽
                                <Image src={add} className={styles.button} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image className={styles.contain} src={item2} alt="" width={224} height={266} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Лоток проволочный 400х50х3000 FC5040 DKC сталь оцинк. 5мм</div>
                            <div className={styles.add}>
                                999 ₽
                                <Image src={add} className={styles.button} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image className={styles.contain} src={item3} alt="" width={224} height={266} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Светильник ЛСП 2х58 ЭПРА IP65 (GO/ON)</div>
                            <div className={styles.add}>
                                1225 ₽
                                <Image src={add} className={styles.button} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image className={styles.contain} src={item4} alt="" width={224} height={266} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}>Кабель ВВГнг-LSLTх 5х16 ГОСТ</div>
                            <div className={styles.add}>
                                899 ₽
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