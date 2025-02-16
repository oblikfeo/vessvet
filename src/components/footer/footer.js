'use client'
import styles from "./footer.module.css";
import footer from '../../../public/img/footer.png'
import Image from "next/image";
import logo from "../../../public/img/logo.png"
import send from "../../../public/img/send.png"
import cart from "../../../public/img/cart.png"
import water from "../../../public/img/water.svg"
import what from "../../../public/img/what.png"
import tg from "../../../public/img/tg.png"
import inst from "../../../public/img/inst.png"
import emailjs from 'emailjs-com';
import { useState } from "react";

const SERVICE_ID = 'service_dq5xm29';
const TEMPLATE_ID = 'template_3venlpe';
const USER_ID = 'v-7auv5vOY-kY5tiN'; // это почему то public key

export default function Footer() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            name,
            phone
        };
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                setName('')
                setPhone('')
            }, error => {
                console.log('FAILED...', error);
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={footer} alt="" />
                <Image className={styles.logo} src={logo} alt="" />
                <div className={styles.contain}>

                    <div className={styles.all}>
                        <div>Покупателям</div>
                        <span>Каталог</span>
                        <span>О нас</span>
                        <span>Контакты</span>
                        <span>Доставка и оплата</span>
                    </div>

                    <div className={styles.form}>
                        <h1>Свяжитесь с нами</h1>
                        <div className={styles.flex}>
                            <input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                            <input placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <h2>Нажимая кнопку «Отправить»,<br />
                                Вы даете свое согласие на обработку персональных данных.</h2>
                        </div>
                        <Image onClick={handleSubmit} className={styles.send} src={send} alt="" />
                    </div>

                    <div className={styles.onCart}>
                        <h1>На карте</h1>
                        <Image className={styles.map} src={cart} alt="" width={322} height={213} />
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.icons}>
                        <Image src={what} alt="" />
                        <Image src={tg} alt="" />
                        <Image src={inst} alt="" />
                    </div>
                    <Image src={water} alt="" />
                </div>
            </div>
        </div>
    );
}