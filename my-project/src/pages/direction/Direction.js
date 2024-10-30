import React from 'react'
import styles from './Direction.module.css'

function Direction(props) {
    return (
        <div id="direction">
            <div className="container">
                <div className={styles.direction}>
                    <div className={styles.carts}>
                        <div className={styles.cart1}>
                            <img src="/img/cart1.png" alt="cart"/>
                            <p>Ментальная арифметика</p>
                        </div>
                        <div className={styles.cart2}>
                            <img src="/img/cart2.png" alt="cart"/>
                            <p>Скорочтение</p>
                        </div>
                        <div className={styles.cart3}>
                            <img src="/img/cart3.png" alt="cart"/>
                            <p>Подготовка к школе</p>
                        </div>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.centerImg}>
                            <img src="/img/direction.png" alt="cart"/>
                            <p>Мы развиваем детей с 5 до 16 лет по
                                следующим направлениям</p>
                        </div>
                        <div className={styles.person}>
                            <img src="/img/person.png" alt="cart"/>
                            <p>Группа продленного дня</p>
                        </div>
                    </div>
                    <div className={styles.carts}>
                        <div className={styles.cart1}>
                            <img src="/img/cart1.png" alt="cart"/>
                            <p>Ментальная арифметика</p>
                        </div>
                        <div className={styles.cart2}>
                            <img src="/img/cart2.png" alt="cart"/>
                            <p>Скорочтение</p>
                        </div>
                        <div className={styles.cart3}>
                            <img src="/img/cart3.png" alt="cart"/>
                            <p>Подготовка к школе</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Direction;