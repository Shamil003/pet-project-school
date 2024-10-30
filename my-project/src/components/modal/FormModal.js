
import React, { useState } from 'react';
import styles from './modal.module.css';

function FormModal(active, setActive, children) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        // Выполните здесь нужные вам действия с данными (например, отправка на сервер)
        console.log('Имя:', name);
        console.log('Телефон:', phone);
        console.log('Комментарий:', comment);

        // Сброс данных после отправки формы
        setName('');
        setPhone('');
        setComment('');
    };

    return (
        <div className={active.active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => active.setActive(false)}>
            <div className={active.active ? `${styles.modal__content} ${styles.active}` : styles.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
                <div className={styles.modal_text}>
                    <h3>
                        Заполните <span style={{ color: "#018FA3" }}>форму</span> и мы обязательно свяжемся с Вами.
                    </h3>
                    <input type="text" placeholder='Ваше имя...' value={name} onChange={handleNameChange} />
                    <input type="text" placeholder='Ваш телефон...' value={phone} onChange={handlePhoneChange} />
                    <input style={{ height: "120px" }} type="text" placeholder='Комментарий...' value={comment} onChange={handleCommentChange} />
                    <button onClick={handleSubmit}>Оставить заявку</button>
                </div>
            </div>
        </div>
    );
}

export default FormModal;
