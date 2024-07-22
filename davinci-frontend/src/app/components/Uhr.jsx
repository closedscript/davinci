"use client"
import React, { useState, useEffect } from 'react';

function Uhr() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(timerID);
    }, []);

    return (
        <div className="container text-center my-5">
            <h1 className="display-4">Aktuelle Uhrzeit</h1>
            <h2 className="display-3">{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Uhr;
