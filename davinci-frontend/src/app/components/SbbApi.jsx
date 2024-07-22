'use client';

import { useEffect, useState } from "react";
import styles from '../styles/sbb.module.css';

export default function SbbApi() {
    const [stationboard, setStationboard] = useState([]);

    useEffect(() => {
        fetch("https://transport.opendata.ch/v1/stationboard?station=Winterthur&limit=15")
            .then(res => res.json())
            .then(data => setStationboard(data.stationboard || []))
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
        <div className={styles.connectionInput}>
            <h2 className={styles.cardTitle}>SBB Fahrplan</h2>
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
                        {stationboard.map((item, idx) => {
                            const arrivalTime = item.passList.find(
                                p => p.station.name === item.to
                            )?.arrival;
                            const platform = item.stop.platform.replace(/!/g, '');

                            return (
                                <tr key={idx}>
                                    <td>{item.stop.station.name}</td>
                                    <td>{formatTimeWithoutSeconds(roundToNextMinute(new Date(item.stop.departure)))}</td>
                                    <td>{platform}</td>
                                    <td>{item.to}</td>
                                    <td>{arrivalTime ? formatTimeWithoutSeconds(roundToNextMinute(new Date(arrivalTime))) : 'N/A'}</td>
                                    <td>{item.category + item.number}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
