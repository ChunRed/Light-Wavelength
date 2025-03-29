import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";

import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);



function Remap(value, from1, to1, from2, to2) {
    if (value < from1) value = from1;
    if (value > to1) value = to1;
    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
}


export function ColorChart(props) {


    let val = props.val;

    for (let i = 0; i < val.length; i++) {
        val[i] = Remap(val[i], 0, 10000, 0, 100);
    }





    //MARK:Bar Chart
    const labels = ["415nm", "445nm", "480nm", "515nm", "555nm", "590nm", "630nm", "680nm"];
    const datasets = [val[0], val[1], val[2], val[3], val[4], val[5], val[6], val[7]];
    const data = {
        labels: labels,
        datasets: [
            {
                // Title of Graph
                label: "Wavelength Bar",
                data: datasets,
                backgroundColor: [
                    "rgba(97, 0, 233, 0.3)",
                    "rgba(0, 26, 255, 0.3)",
                    "rgba(0, 240, 255, 0.3)",
                    "rgba(18, 255, 0, 0.3)",
                    "rgba(164, 255, 0, 0.3)",
                    "rgba(255, 216, 0, 0.3)",
                    "rgba(255, 80, 0, 0.3)",
                    "rgba(255, 0, 0, 0.3)",
                ],
                borderColor: [
                    "rgb(97, 0, 233)",
                    "rgb(0, 26, 255)",
                    "rgb(0, 240, 255)",
                    "rgb(18, 255, 0)",
                    "rgb(164, 255, 0)",
                    "rgb(255, 216, 0)",
                    "rgb(255, 80, 0)",
                    "rgb(255, 0, 0)",
                ],
                borderWidth: 1,
                barPercentage: 1,
                borderRadius: {
                    topLeft: 3,
                    topRight: 3,
                },
            },
            // insert similar in dataset object for making multi bar chart
        ],
    };
    const options = {
        scales: {
            y: {
                title: {
                    display: true,
                    text: "nm percentage",
                },
                display: true,
                beginAtZero: true,
                max: 100,
            },
            x: {
                title: {
                    display: true,
                    text: "Wavelength",
                },
                display: true,
            },
        },
    };





    //MARK:Doughnut Chart

    const Doughnut_data = {
        labels: ["415nm", "445nm", "480nm", "515nm", "555nm", "590nm", "630nm", "680nm"],
        datasets: [
            {
                label: '# of Votes',
                data: [val[0], val[1], val[2], val[3], val[4], val[5], val[6], val[7]],
                backgroundColor: [
                    "rgba(97, 0, 233, 0.3)",
                    "rgba(0, 26, 255, 0.3)",
                    "rgba(0, 240, 255, 0.3)",
                    "rgba(18, 255, 0, 0.3)",
                    "rgba(164, 255, 0, 0.3)",
                    "rgba(255, 216, 0, 0.3)",
                    "rgba(255, 80, 0, 0.3)",
                    "rgba(255, 0, 0, 0.3)",
                ],
                borderColor: [
                    "rgb(97, 0, 233)",
                    "rgb(0, 26, 255)",
                    "rgb(0, 240, 255)",
                    "rgb(18, 255, 0)",
                    "rgb(164, 255, 0)",
                    "rgb(255, 216, 0)",
                    "rgb(255, 80, 0)",
                    "rgb(255, 0, 0)",
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <main>
            <div className="container">

                <div className="row mt-5">
                    <div className="col text-center text-light">Bar Chart</div>
                </div>

                <div className="row">
                    <div style={{ width: "1000px", margin: "0 auto" }}>
                        <Bar data={data} options={options} />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col text-center text-light">Doughnut Chart</div>
                </div>


                <div className="row">
                    <div style={{ width: "1000px", margin: "0 auto" }}>
                        <Doughnut data={Doughnut_data} />;
                    </div>
                </div>
            </div>
        </main>
    )
}