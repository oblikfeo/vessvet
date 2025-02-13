import styles from "./header.module.css";
import fon from "../../../public/img/fon.png"
import logo from "../../../public/img/logo.png"
import svg from "../../../public/img/01.png"
import svg1 from "../../../public/img/svg1.svg"
import svg2 from "../../../public/img/svg2.svg"
import svg3 from "../../../public/img/svg3.svg"
import leftarrow from "../../../public/img/leftarrow.png"
import lk from "../../../public/img/lk.png"
import basket from "../../../public/img/basket.png"
import ellipse from "../../../public/img/ellipse.png"
import rightarrow from "../../../public/img/rightarrow.png"
import line from "../../../public/img/line.png"
import catalogBut from "../../../public/img/catalogBut.png"
import headerImg from "../../../public/img/headerImg.png"
import Image from 'next/image';

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.fon} src={fon} alt="" />
            <Image className={styles.logo} src={logo} alt="" />
            <Image className={styles.line} src={line} alt="" />
            <Image className={styles.ellipse} src={ellipse} alt="" />
            <div className={styles.menu}>
                <div className={styles.contacts}>
                    <div className={styles.now}>Главная</div>
                    <div className={styles.later}>О нас</div>
                    <div className={styles.later}>Услуги для предприятий</div>
                    <div className={styles.later}>Работа в компании</div>
                    <div className={styles.later}>Новости</div>
                    <div className={styles.later}>Контакты</div>
                </div>
                <div className={styles.number}>
                    +7 (3812) 387-535
                </div>
            </div>

            <div className={styles.menuSearch}>
                <Image className={styles.logo} src={catalogBut} alt="" />
                <input placeholder="Поиск" className={styles.search} />
                <div className={styles.buttonSearch}>
                    <Image className={styles.searchBut} src={lk} alt="" />
                    <Image className={styles.searchBut} src={basket} alt="" />
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <Image className={styles.svg01} src={svg} alt="" />
                        <div className={styles.why}>Почему мы?</div>
                        <div className={styles.about}>
                            <div className={styles.flex}>
                                <Image className={styles.svg} src={svg1} alt="" />
                                <span className={styles.font5}>у нас самый большой выбор</span>
                            </div>
                            <div className={styles.flex}>
                                <Image className={styles.svg} src={svg2} alt="" />
                                <span className={styles.font5}>любим клиентов</span>
                            </div>
                            <div className={styles.flex}>
                                <Image className={styles.svg} src={svg3} alt="" />
                                <span className={styles.font5}>ответственный подход к своему делу</span>
                            </div>
                        </div>
                        <div className={styles.anyText}>В баннере как правило указываются акции, предложения, товары, популярное и т.п. Тут будут изображения, фотографии, контент, которым клиент хочет наполнить главный экран.</div>
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
                <div className={styles.headerPng}>
                    <Image className={styles.logo} src={headerImg} alt="" />
                </div>
            </div>
        </div>
    );
}
