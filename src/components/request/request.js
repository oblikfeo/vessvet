import styles from "./request.module.css";
import mail from "../../../public/img/mail.png"
import Image from "next/image";

export default function Request() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.margin}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2>Оставить заявку на интересующий вас товар</h2>
                        <h3>Получить расчет стоимостии <br /> уточнить наличие товара</h3>
                    </div>
                    <div className={styles.form}>
                        <input placeholder="Имя" />
                        <input placeholder="Номер телефона" />
                        <div className={styles.send}>
                            Нажимая кнопку «Отправить»,<br />Вы даете свое согласие на обработку персональных данных.
                            <Image src={mail} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
