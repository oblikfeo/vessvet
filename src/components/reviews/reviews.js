'use client'
import styles from "./reviews.module.css";
import yellowArrow from "../../../public/img/yellowArrow.png"
import Image from "next/image";
import leftarrow2 from "../../../public/img/leftarrow2.png"
import rightarrow from "../../../public/img/rightarrow.png"
import { useState } from "react";

export default function Reviews() {

    const [page, setPage] = useState(1)

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>

                <div className={styles.top}>
                    <h1>Отзывы</h1>
                    <div className={styles.link}>
                        <a href="https://go.2gis.com/EQ3pz">
                            <span>Все отзывы</span>
                        </a>
                        <Image src={yellowArrow} alt="" />
                    </div>
                </div>

                <div className={styles.main}>

                    <div className={styles.comment}>
                        <div className={styles.who}>
                            <div className={styles.ellipseWhite} />
                            <span>
                                {page === 1 && "Анна"}
                                {page === 2 && "Александр Н"}
                                {page === 3 && "Алексей Изотов"}
                            </span>
                            <div>
                                {page === 1 && "31 июля 2024"}
                                {page === 2 && " 7 июня 2024"}
                                {page === 3 && "28 мая 2024"}
                            </div>
                        </div>
                        <div>
                            <div className={styles.text}>
                                {page === 1 && "Очень рада что обратилась именно в этот магазин . Помогли с подбором розеток, выключателей и светильников в натяжной потолок, так как сама я в этом ничего не понимаю . Менеджер Виктория все рассказала и показала и по цене вышло очень и очень симпатичненько . Выбором своим осталась довольна. Рекомендую !!!"}
                                {page === 2 && "Работаем с компанией Весь Свет уже четыре года. Впечатления только позитивные, профессиональные менеджеры , шустрые кладовщики, удобное местоположение. Привезут любой заказ , нет необходимости искать по всем компаниям в Омске."}
                                {page === 3 && "С этой компанией работаю давно, на постоянной основе. На высшем уровне оперативность, компетентность и клиентоориентированность! Сотрудники профессионалы своего дела! Рекомендую всем!"}
                            </div>
                            <div className={styles.link}>
                                <a href="https://go.2gis.com/EQ3pz">
                                    Читать полностью
                                </a>
                                <Image src={yellowArrow} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.comment}>
                        <div className={styles.who}>
                            <div className={styles.ellipseWhite} />
                            <span>
                                {page === 1 && "Алексей Ершков"}
                                {page === 2 && "Ю ."}
                                {page === 3 && "Emil Kashaev"}
                            </span>
                            <div>
                                {page === 1 && "31 июля 2024"}
                                {page === 2 && "11 декабря 2023"}
                                {page === 3 && "21 июля 2023"}
                            </div>
                        </div>
                        <div>
                            <div className={styles.text}>
                                {page === 1 && "Очень рад что обратился в данный магазин, отзывчивые продавцы достали все что мне нужно быстро и без лишнего навязчивания что для меня огромный плюс. Всем советую"}
                                {page === 2 && "как я рада, что нашла этот магазин! здесь есть все, что нужно по электрике, качество 🔥 сотрудники вежливые, подсказывают по ассортименту, помогают в выборе. что касается цен: есть разные варианты на любой запрос. выдача товара происходит через склад, который находится тут же, в соседнем здании"}
                                {page === 3 && "Замечательный ассортимент электро-товара, есть абсолютно все необходимое. Приобретал кабели, стабилизатор, розетки, выключатели и многое другое для замены электропроводки. Самые приятные цены которые я встречал."}
                            </div>
                            <div className={styles.link}>
                                <a href="https://go.2gis.com/EQ3pz">
                                    Читать полностью
                                </a>
                                <Image src={yellowArrow} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.page}>
                    <div className={styles.pages}>
                        <div className={styles.arrow}>
                            <div>
                                <Image
                                    onClick={() => {
                                        if (page > 1) {
                                            setPage(page - 1)
                                        }
                                    }}
                                    src={leftarrow2}
                                    alt="" />
                            </div>
                            <div>
                                <Image
                                    onClick={() => {
                                        if (page < 3) {
                                            setPage(page + 1)
                                        }
                                    }}
                                    src={rightarrow}
                                    alt="" />
                            </div>
                        </div>
                        <div className={styles.count}>
                            <div className={styles.yellow}>{page}</div>
                            <div>3</div>
                        </div>
                        <div className={styles.feedback}>
                            <a href="https://go.2gis.com/EQ3pz">
                                Оставить отзыв
                            </a>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}
