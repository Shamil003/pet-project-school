import React from 'react';

import styles from './reviews.module.css'
function Reviews(props) {
    return (
        <div id="reviews">
            <div className="container">
                <div className={styles.reviews}>
                    <h1>Отзывы</h1>
                    <div className={styles.reviewsContent}>
                        <div className={styles.revCart}>
                            <div className={styles.imgText}>
                                <img style={{width: 60}} src="/img/imgText1.png" alt=""/>
                                <h3 style={{marginTop: "20px", marginLeft: "20px"}}>Malika Fazlieva</h3>
                            </div>
                            <p>То, что мне понравилось, хорошо передает знания.
                                Сыну не было 1 месяца но результат есть. Учителя
                                очень вежливы и образованы.</p>
                        </div>
                        <div className={styles.revCart}>
                            <div className={styles.imgText}>
                                <img style={{width: 60}} src="/img/imgText2.png" alt=""/>
                                <h3 style={{marginTop: "20px", marginLeft: "20px"}}>Aigul Lepessova</h3>
                            </div>
                            <p>Отлично все нравится! Внучка уже 6 месяц занимается, довольны</p>
                        </div>
                        <div className={styles.revCart}>
                            <div className={styles.imgText}>
                                <img style={{width: 60}} src="/img/imgText3.png" alt=""/>
                                <h3 style={{marginTop: "20px", marginLeft: "20px"}}>Aydana Tilek </h3>
                            </div>
                            <p>Школа предоставляет отличную образовательную среду,
                                где учителя компетентны и умеют вдохновлять и мотивировать.
                                Мой сын уже два года ходит в эту школу и я очень довольна.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;