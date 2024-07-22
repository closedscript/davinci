'use client'

import { useEffect, useState } from "react";
import styles from '../styles/sbb.module.css';

export default function SbbApi() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch("https://transport.opendata.ch/v1/stationboard?station=Winterthur&limit=15")
            .then(res => res.json())
            .then(data => setWords(data))
            .catch(error => console.error('Error fetching connections:', error));
    }, []);

    const roundToNextMinute = (date) => {
        let newDate = new Date(date);
        newDate.setSeconds(0, 0);
        if (date.getSeconds() >= 30) {
            newDate.setMinutes(newDate.getMinutes() + 1);
        }
        return newDate;
    };

    const formatTimeWithoutSeconds = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        
            <main className={styles.main}>
                <div className={styles.connectionInput}>
                    <h2>Sbb Fahrplan</h2>
                    {/* <p>Verbindung suchen:</p>
                    <p>Von: </p>
                    <input type="text"/>
                    <p>Nach:</p>
                    <input type="text"/>
                    <br/>
                    <button>Suchen</button>
                    <br/> */}

                    <div className={styles.container}>
                        <table className={styles["styled-table"]}>
                            <thead>
                            <tr>
                                <th>Von</th>
                                <th>Abfahrtszeit</th>
                                <th>Gleis</th>
                                <th>Nach</th>
                                <th>Ankunftszeit</th>
                                <th>Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {words.stationboard && words.stationboard.map((stationboard, idx) => {
                                const arrivalTime = stationboard.passList.find(
                                    p => p.station.name === stationboard.to
                                )?.arrival;
                                const platform = stationboard.stop.platform.replace(/!/g, '');

                                return (
                                    <tr key={idx}>
                                        <td>{stationboard.stop.station.name}</td>
                                        <td>{formatTimeWithoutSeconds(roundToNextMinute(new Date(stationboard.stop.departure)))}</td>
                                        <td>{platform}</td>
                                        <td>{stationboard.to}</td>
                                        <td>{formatTimeWithoutSeconds(roundToNextMinute(new Date(arrivalTime)))}</td>
                                        <td>{stationboard.category + stationboard.number}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
    );
}
