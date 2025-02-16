'use client'
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
import { useState } from "react";

export default function Header() {

    const [page, setPage] = useState(1)

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
                                <span className={styles.font5}>
                                    {page === 1 && "Снимаем с вас боль закупа, экономя ваши силы и время."}
                                    {page === 3 && "Находим и поставляем всё, что вам требуется: редкие позиции, мелочёвку, непрофильную продукцию, «аленький цветок»."}
                                    {page === 2 && "Доставляем товар до вашей двери при заказе на незначительную сумму, если вам это очень нужно."}
                                </span>
                            </div>
                            <div className={styles.flex}>
                                <Image className={styles.svg} src={svg2} alt="" />
                                <span className={styles.font5}>
                                    {page === 1 && "Снимаем с вас боль закупа, экономя ваши силы и время."}
                                    {page === 3 && "Отгружаем электроматериалы без оплаты, в нерабочее время, в выходной и даже ночью, если у вас ЧП.."}
                                    {page === 2 && "Даём протестировать интересующие образцы продукции, дабы развеять ваши смутные сомнения."}
                                </span>
                            </div>
                            <div className={styles.flex}>
                                <Image className={styles.svg} src={svg3} alt="" />
                                <span className={styles.font5}>
                                    {page === 1 && "Делаем бесплатную доставку по городу уже сегодня или на следующий день, а в экстренной ситуации – в течение нескольких часов."}
                                    {page === 3 && "Отсрочиваем платёж за товар на комфортный для вас период, договариваемся об оптимальных условиях оплаты."}
                                    {page === 2 && "вас исполнительностью, обаянием и юмором вашего персонального менеджера."}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pages}>
                        <div className={styles.count}>
                            <div className={styles.yellow}>{page}</div>
                            <div>3</div>
                        </div>
                        <div className={styles.arrow}>
                            <div><Image onClick={() => {
                                if (page > 1) {
                                    setPage(page - 1)
                                }
                            }}
                                src={leftarrow}
                                alt="" /></div>
                            <div><Image onClick={() => {
                                if (page < 3) {
                                    setPage(page + 1)
                                }
                            }}
                                src={rightarrow}
                                alt="" /></div>
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
