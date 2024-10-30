import React from 'react';
import styles from  './About.module.css'
function About(props) {
    return (
        <>
            <div id="about" className={styles.about}>
                <div className="container">
                    <div className={styles.aboutTop}>
                        <div className={styles.aboutContent}>
                            <img src="/img/about11.png" alt=""/>

                            <p>В нашем школе работают профессиональные педагоги любящие
                                детей и преданные своему делу. Мы помогаем детям совершенствовать свои
                                интеллектуальные способности чтобы они могли  познавать мир и делать его
                                более красивым и добрым. </p>
                        </div>
                        <div className={styles.aboutLeft}>
                            <img src="/img/about2.png" alt=""/>
                        </div>

                    </div>
                    <div className={styles.aboutBottom}>
                        <div className={styles.aboutLeft}>
                            <img src="/img/about1.png" alt=""/>
                        </div>
                        <div className={styles.aboutContent2}>
                            <img src="/img/about22.png" alt=""/>

                            <p>Наши ученики показывают результат уже с первого месяца работы, мы поддерживаем
                                в нашем центре теплую и дружескую атмосферу
                                Побывав у нас детям обязательно захочется вернуться сюда снова
                                Развивайтесь вместе с нами
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;