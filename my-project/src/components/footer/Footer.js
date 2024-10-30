import React from 'react';

import styles from './footer.module.css'

function Footer(props) {
    return (
        <div>
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.footerContent}>
                        <h3>О нас</h3>
                        <h3>Каталог</h3>
                        <h3>Сертификаты</h3>
                        <h3>Отзывы</h3>
                        <h3>Контакты</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;