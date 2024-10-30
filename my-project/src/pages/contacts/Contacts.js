import React from 'react';

import styles from './contacts.module.css'
function Contacts(props) {
    return (
        <div id="contacts">
            <div className="container">
                <div className={styles.contacts}>
                    <div className={styles.contactContent}>
                        <h1>Наши контакты</h1>
                        <h3>Запишитесь на бесплатный пробный урок
                            по номеру:</h3>
                        <p>+996 550 550 550 </p>

                        <h3>Адрес:</h3>
                        <p>г. Бишкек</p>

                        <h3>График работы:</h3>
                        <p>Пн-Пт - 9:00-19:00;<br/>
                            Сб - 9:00-17:00;<br/>
                            Вс - выходной</p>

                        <h3>E-mail:</h3>
                        <p>@stanford.mektebi</p>
                    </div>
                    <img style={{width: 531, height: 500}} src="/img/callPerson.png" alt="person"/>
                </div>
                <div className={styles.carta}>
                    <a href="https://yandex.ru/maps/10309/bishkek/?ll=74.603698%2C42.875969&z=12" type="_blank"><img src="/img/carta.png" alt=""/></a>

                </div>
            </div>

        </div>
    );
}

export default Contacts;