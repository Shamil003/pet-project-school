import React from 'react';

import styles from './certificates.module.css'

function Certificates(props) {
    return (
        <div id="certificates">
                <div className={styles.certificates}>
                    <div className="container">
                        <h1>Наши сертификаты</h1>
                    </div>
                    <img src="/img/certificates.png" alt=""/>
                </div>


        </div>
    );
}

export default Certificates;