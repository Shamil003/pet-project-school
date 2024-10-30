import React, {useState} from 'react';
import styles from './home.module.css'
import FormModal from "../../components/modal/FormModal";

function Home() {
        const [ modalActive, setModalActive ] = useState(false )
    // const [isOpen, setIsOpen] = useState(false);
    //
    // const openModal = () => {
    //     setIsOpen(true);
    // };
    // const closeModal = () => {
    //     setIsOpen(false)
    // }
    return (
        <>
            <div className={styles.home}>
                <div className="container">
                    <div className={styles.homeContent}>
                        <h1><span style={{color: "#018FA3"}}>STANFORD.KG school</span> - центр
                            интеллектуального развития</h1>
                        <p>Обучение происходит на кыргызском, английском и русском языках.
                            Будущее в наших руках. </p>
                        <div className={styles.homeButton}>
                            <button className={styles.open_btn} onClick={() => setModalActive(true)}>Оставить заявку</button>
                            <FormModal active={modalActive} setActive={setModalActive}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;