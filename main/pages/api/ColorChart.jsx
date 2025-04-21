import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";

import { Chart as ChartJS, LineController, ArcElement, LineElement, LinearScale, CategoryScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale, LineController, LineElement, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);



function Remap(value, from1, to1, from2, to2) {
    if (value < from1) value = from1;
    if (value > to1) value = to1;
    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
}


export function ColorChart(props) {


    let val = props.val;
    let val_dataset = props.dataset;

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



    //MARK:Line Chart
    const linechartdata = {

        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8"],
        datasets: [{
            label: '415nm',
            data: [parseInt(val_dataset[0][0]), parseInt(val_dataset[1][0]), parseInt(val_dataset[2][0]), parseInt(val_dataset[3][0]), parseInt(val_dataset[4][0]), parseInt(val_dataset[5][0]), parseInt(val_dataset[6][0]), parseInt(val_dataset[7][0])],
            fill: false,
            borderColor: 'rgb(97, 0, 233)',
            tension: 0.1
        }, {
            label: '445nm',
            data: [parseInt(val_dataset[0][1]), parseInt(val_dataset[1][1]), parseInt(val_dataset[2][1]), parseInt(val_dataset[3][1]), parseInt(val_dataset[4][1]), parseInt(val_dataset[5][1]), parseInt(val_dataset[6][1]), parseInt(val_dataset[7][1])],
            fill: false,
            borderColor: 'rgb(0, 26, 255)',
            tension: 0.1
        }, {
            label: '480nm',
            data: [parseInt(val_dataset[0][2]), parseInt(val_dataset[1][2]), parseInt(val_dataset[2][2]), parseInt(val_dataset[3][2]), parseInt(val_dataset[4][2]), parseInt(val_dataset[5][2]), parseInt(val_dataset[6][2]), parseInt(val_dataset[7][2])],
            fill: false,
            borderColor: 'rgb(0, 240, 255)',
            tension: 0.1
        }, {
            label: '515nm',
            data: [parseInt(val_dataset[0][3]), parseInt(val_dataset[1][3]), parseInt(val_dataset[2][3]), parseInt(val_dataset[3][3]), parseInt(val_dataset[4][3]), parseInt(val_dataset[5][3]), parseInt(val_dataset[6][3]), parseInt(val_dataset[7][3])],
            fill: false,
            borderColor: 'rgb(18, 255, 0)',
            tension: 0.1
        }, {
            label: '555nm',
            data: [parseInt(val_dataset[0][4]), parseInt(val_dataset[1][4]), parseInt(val_dataset[2][4]), parseInt(val_dataset[3][4]), parseInt(val_dataset[4][4]), parseInt(val_dataset[5][4]), parseInt(val_dataset[6][4]), parseInt(val_dataset[7][4])],
            fill: false,
            borderColor: 'rgb(164, 255, 0)',
            tension: 0.1
        }, {
            label: '590nm',
            data: [parseInt(val_dataset[0][5]), parseInt(val_dataset[1][5]), parseInt(val_dataset[2][5]), parseInt(val_dataset[3][5]), parseInt(val_dataset[4][5]), parseInt(val_dataset[5][5]), parseInt(val_dataset[6][5]), parseInt(val_dataset[7][5])],
            fill: false,
            borderColor: 'rgb(255, 216, 0)',
            tension: 0.1
        }, {
            label: '630nm',
            data: [parseInt(val_dataset[0][6]), parseInt(val_dataset[1][6]), parseInt(val_dataset[2][6]), parseInt(val_dataset[3][6]), parseInt(val_dataset[4][6]), parseInt(val_dataset[5][6]), parseInt(val_dataset[6][6]), parseInt(val_dataset[7][6])],
            fill: false,
            borderColor: 'rgb(255,80,0)',
            tension: 0.1
        }, {
            label: '680nm',
            data: [parseInt(val_dataset[0][7]), parseInt(val_dataset[1][7]), parseInt(val_dataset[2][7]), parseInt(val_dataset[3][7]), parseInt(val_dataset[4][7]), parseInt(val_dataset[5][7]), parseInt(val_dataset[6][7]), parseInt(val_dataset[7][7])],
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1
        }],

    };

    const Options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white', // 標籤字體顏色
                    font: {
                        size: 14, // 標籤字體大小
                    },
                },
            },
            title: {
                display: true,
                color: 'white', // 標題字體顏色
                font: {
                    size: 18, // 標題字體大小
                },
            },
            tooltip: {
                bodyFont: {
                    size: 14,
                },
                titleFont: {
                    size: 16,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // x 軸文字顏色
                    font: {
                        size: 14, // x 軸文字大小
                    },
                },
                title: {
                    display: true,
                    text: 'Wavelength',
                    color: 'white',
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                ticks: {
                    color: 'white', // y 軸文字顏色
                    font: {
                        size: 14,
                    },
                },
                title: {
                    display: true,
                    text: 'nm percentage',
                    color: 'white',
                    font: {
                        size: 16,
                    },
                },
            },
        },
    };



    console.log(val_dataset);


    return (
        <main>
            <div className="container">


                <div className="row mt-3">

                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className="row mt-3">
                            <div className="col text-center text-light">Bar Chart</div>
                        </div>
                        <div className="row">
                            <Bar className="col" data={data} options={Options} />
                        </div>

                    </div>

                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" >
                        <div className="row">
                            <div className="col text-center text-light">Doughnut Chart</div>
                        </div>
                        <div className="row">
                            <Doughnut className='col' data={Doughnut_data} options={Options} />
                        </div>
                    </div>
                </div>


                <div className="row mt-3">
                    <div className="col" >

                        <div className="row">
                            <div className="col text-center text-light">Line Chart</div>
                        </div>

                        <div className="row">
                            <Line data={linechartdata} options={Options} />
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}