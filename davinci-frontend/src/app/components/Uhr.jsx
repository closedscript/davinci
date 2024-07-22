"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-clock/dist/Clock.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/nightclock.module.css"


const Clock = dynamic(() => import('react-clock'), { ssr: false });

export default function Uhr() {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(new Date());
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => clearInterval(interval);
    }, []);

    if (!value) {
        return <div>Loading...</div>;
    }

    return (
        <div className="clock-background d-flex justify-content-center align-items-center">
            <div className={"night-clock"}>
                <Clock value={value} size={300} renderNumbers={true} />
            </div>
        </div>
    );
}
