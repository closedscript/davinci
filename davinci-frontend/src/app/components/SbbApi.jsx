'use client'

import { useEffect, useState } from "react";
import styles from '../styles/sbb.module.css';

export default function SbbApi() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch("https://transport.opendata.ch/v1/connections?from=Winterthur&to=Zurich")
            .then(res => res.json())
            .then(data => setWords(data))
            .catch(error => console.error('Error fetching connections:', error));
    }, []);

    return (
       
            <main className={styles.main}>
                <div className={styles.connectionInput}>
                    <h2>Sbb Fahrplan</h2>
                    <p>Verbindung suchen:</p>
                    <p>Von: </p>
                    <input type="text"/>
                    <p>Nach:</p>
                    <input type="text"/>
                    <br/>
                    <button>Suchen</button>
                    <br/>

                    <div className={styles.container}>
                        <table className={styles["styled-table"]}>
                            <thead>
                            <tr>
                                <th>Von</th>
                                <th>Abfahrtszeit</th>
                                <th>Gleis Abfahrt</th>
                                <th>Nach</th>
                                <th>Ankunftszeit</th>
                                <th>Gleis Ankunft</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                words.connections && words.connections.map((connection, idx) => (
                                    <tr key={idx}>
                                        <td>{connection.from.station.name}</td>
                                        <td>{new Date(connection.from.departure).toLocaleTimeString()}</td>
                                        <td>{connection.from.platform}</td>
                                        <td>{connection.to.station.name}</td>
                                        <td>{new Date(connection.to.arrival).toLocaleTimeString()}</td>
                                        <td>{connection.to.platform}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
    );
}
