"use client"
import React from 'react';
import styles from './Day.module.css'; // Importieren Sie die CSS-Module-Datei

export default function BackgroundAnimation() {
    return (
        <div className={styles.backgroundContainer}>
            <img className={styles.moonImage} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="moon" />
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <div className={styles.clouds}></div>
        </div>
    );
}
