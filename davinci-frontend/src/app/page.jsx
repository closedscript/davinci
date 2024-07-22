"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Uhr from "../app/components/Uhr";
import BackgroundAnimation from "@/app/Backgrounds/Day";
import SbbApi from "@/app/components/SbbApi";

export default function Home() {
    return (
        <main>
            <BackgroundAnimation/>



            <div className={"react-clock"}>
                <Uhr></Uhr>

            </div>

        </main>
    )
        ;
}
