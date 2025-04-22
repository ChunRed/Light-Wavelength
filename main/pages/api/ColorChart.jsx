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
    const linechartdata_415 = {

        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '415nm',
            data: [parseInt(val_dataset[0][0]), parseInt(val_dataset[1][0]), parseInt(val_dataset[2][0]), parseInt(val_dataset[3][0]), parseInt(val_dataset[4][0]), parseInt(val_dataset[5][0]), parseInt(val_dataset[6][0]), parseInt(val_dataset[7][0]), parseInt(val_dataset[8][0]), parseInt(val_dataset[9][0]), parseInt(val_dataset[10][0]), parseInt(val_dataset[11][0]), parseInt(val_dataset[12][0]), parseInt(val_dataset[13][0]), parseInt(val_dataset[14][0]), parseInt(val_dataset[15][0]), parseInt(val_dataset[16][0]), parseInt(val_dataset[17][0]), parseInt(val_dataset[18][0]), parseInt(val_dataset[19][0]), parseInt(val_dataset[20][0]), parseInt(val_dataset[21][0]), parseInt(val_dataset[22][0]), parseInt(val_dataset[23][0]), parseInt(val_dataset[24][0]), parseInt(val_dataset[25][0]), parseInt(val_dataset[26][0]), parseInt(val_dataset[27][0]), parseInt(val_dataset[28][0]), parseInt(val_dataset[29][0])],
            fill: false,
            borderColor: 'rgb(97, 0, 233)',
            tension: 0.1
        }],

    };
    const linechartdata_445 = {
        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '445nm',
            data: [parseInt(val_dataset[0][1]), parseInt(val_dataset[1][1]), parseInt(val_dataset[2][1]), parseInt(val_dataset[3][1]), parseInt(val_dataset[4][1]), parseInt(val_dataset[5][1]), parseInt(val_dataset[6][1]), parseInt(val_dataset[7][1]), parseInt(val_dataset[8][1]), parseInt(val_dataset[9][1]), parseInt(val_dataset[10][1]), parseInt(val_dataset[11][1]), parseInt(val_dataset[12][1]), parseInt(val_dataset[13][1]), parseInt(val_dataset[14][1]), parseInt(val_dataset[15][1]), parseInt(val_dataset[16][1]), parseInt(val_dataset[17][1]), parseInt(val_dataset[18][1]), parseInt(val_dataset[19][1]), parseInt(val_dataset[20][1]), parseInt(val_dataset[21][1]), parseInt(val_dataset[22][1]), parseInt(val_dataset[23][1]), parseInt(val_dataset[24][1]), parseInt(val_dataset[25][1]), parseInt(val_dataset[26][1]), parseInt(val_dataset[27][1]), parseInt(val_dataset[28][1]), parseInt(val_dataset[29][1])],
            fill: false,
            borderColor: 'rgb(0, 26, 255)',
            tension: 0.1
        }]
    }
    const linechartdata_480 = {
        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '480nm',
            data: [parseInt(val_dataset[0][2]), parseInt(val_dataset[1][2]), parseInt(val_dataset[2][2]), parseInt(val_dataset[3][2]), parseInt(val_dataset[4][2]), parseInt(val_dataset[5][2]), parseInt(val_dataset[6][2]), parseInt(val_dataset[7][2]), parseInt(val_dataset[8][2]), parseInt(val_dataset[9][2]), parseInt(val_dataset[10][2]), parseInt(val_dataset[11][2]), parseInt(val_dataset[12][2]), parseInt(val_dataset[13][2]), parseInt(val_dataset[14][2]), parseInt(val_dataset[15][2]), parseInt(val_dataset[16][2]), parseInt(val_dataset[17][2]), parseInt(val_dataset[18][2]), parseInt(val_dataset[19][2]), parseInt(val_dataset[20][2]), parseInt(val_dataset[21][2]), parseInt(val_dataset[22][2]), parseInt(val_dataset[23][2]), parseInt(val_dataset[24][2]), parseInt(val_dataset[25][2]), parseInt(val_dataset[26][2]), parseInt(val_dataset[27][2]), parseInt(val_dataset[28][2]), parseInt(val_dataset[29][2])],
            fill: false,
            borderColor: 'rgb(0, 240, 255)',
            tension: 0.1
        }]
    }
    const linechartdata_515 = {
        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '480nm',
            data: [parseInt(val_dataset[0][3]), parseInt(val_dataset[1][3]), parseInt(val_dataset[2][3]), parseInt(val_dataset[3][3]), parseInt(val_dataset[4][3]), parseInt(val_dataset[5][3]), parseInt(val_dataset[6][3]), parseInt(val_dataset[7][3]), parseInt(val_dataset[8][3]), parseInt(val_dataset[9][3]), parseInt(val_dataset[10][3]), parseInt(val_dataset[11][3]), parseInt(val_dataset[12][3]), parseInt(val_dataset[13][3]), parseInt(val_dataset[14][3]), parseInt(val_dataset[15][3]), parseInt(val_dataset[16][3]), parseInt(val_dataset[17][3]), parseInt(val_dataset[18][3]), parseInt(val_dataset[19][3]), parseInt(val_dataset[20][3]), parseInt(val_dataset[21][3]), parseInt(val_dataset[22][3]), parseInt(val_dataset[23][3]), parseInt(val_dataset[24][3]), parseInt(val_dataset[25][3]), parseInt(val_dataset[26][3]), parseInt(val_dataset[27][3]), parseInt(val_dataset[28][3]), parseInt(val_dataset[29][3])],
            fill: false,
            borderColor: 'rgb(18, 255, 0)',
            tension: 0.1
        }]
    }
    const linechartdata_555 = {
        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '480nm',
            data: [parseInt(val_dataset[0][4]), parseInt(val_dataset[1][4]), parseInt(val_dataset[2][4]), parseInt(val_dataset[3][4]), parseInt(val_dataset[4][4]), parseInt(val_dataset[5][4]), parseInt(val_dataset[6][4]), parseInt(val_dataset[7][4]), parseInt(val_dataset[8][4]), parseInt(val_dataset[9][4]), parseInt(val_dataset[10][4]), parseInt(val_dataset[11][4]), parseInt(val_dataset[12][4]), parseInt(val_dataset[13][4]), parseInt(val_dataset[14][4]), parseInt(val_dataset[15][4]), parseInt(val_dataset[16][4]), parseInt(val_dataset[17][4]), parseInt(val_dataset[18][4]), parseInt(val_dataset[19][4]), parseInt(val_dataset[20][4]), parseInt(val_dataset[21][4]), parseInt(val_dataset[22][4]), parseInt(val_dataset[23][4]), parseInt(val_dataset[24][4]), parseInt(val_dataset[25][4]), parseInt(val_dataset[26][4]), parseInt(val_dataset[27][4]), parseInt(val_dataset[28][4]), parseInt(val_dataset[29][4])],
            fill: false,
            borderColor: 'rgb(164, 255, 0)',
            tension: 0.1
        }]
    }
    const linechartdata_590 = {
        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '480nm',
            data: [parseInt(val_dataset[0][5]), parseInt(val_dataset[1][5]), parseInt(val_dataset[2][5]), parseInt(val_dataset[3][5]), parseInt(val_dataset[4][5]), parseInt(val_dataset[5][5]), parseInt(val_dataset[6][5]), parseInt(val_dataset[7][5]), parseInt(val_dataset[8][5]), parseInt(val_dataset[9][5]), parseInt(val_dataset[10][5]), parseInt(val_dataset[11][5]), parseInt(val_dataset[12][5]), parseInt(val_dataset[13][5]), parseInt(val_dataset[14][5]), parseInt(val_dataset[15][5]), parseInt(val_dataset[16][5]), parseInt(val_dataset[17][5]), parseInt(val_dataset[18][5]), parseInt(val_dataset[19][5]), parseInt(val_dataset[20][5]), parseInt(val_dataset[21][5]), parseInt(val_dataset[22][5]), parseInt(val_dataset[23][5]), parseInt(val_dataset[24][5]), parseInt(val_dataset[25][5]), parseInt(val_dataset[26][5]), parseInt(val_dataset[27][5]), parseInt(val_dataset[28][5]), parseInt(val_dataset[29][5])],
            fill: false,
            borderColor: 'rgb(255, 216, 0)',
            tension: 0.1
        }]
    }
    const linechartdata_630 = {
        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '480nm',
            data: [parseInt(val_dataset[0][6]), parseInt(val_dataset[1][6]), parseInt(val_dataset[2][6]), parseInt(val_dataset[3][6]), parseInt(val_dataset[4][6]), parseInt(val_dataset[5][6]), parseInt(val_dataset[6][6]), parseInt(val_dataset[7][6]), parseInt(val_dataset[8][6]), parseInt(val_dataset[9][6]), parseInt(val_dataset[10][6]), parseInt(val_dataset[11][6]), parseInt(val_dataset[12][6]), parseInt(val_dataset[13][6]), parseInt(val_dataset[14][6]), parseInt(val_dataset[15][6]), parseInt(val_dataset[16][6]), parseInt(val_dataset[17][6]), parseInt(val_dataset[18][6]), parseInt(val_dataset[19][6]), parseInt(val_dataset[20][6]), parseInt(val_dataset[21][6]), parseInt(val_dataset[22][6]), parseInt(val_dataset[23][6]), parseInt(val_dataset[24][6]), parseInt(val_dataset[25][6]), parseInt(val_dataset[26][6]), parseInt(val_dataset[27][6]), parseInt(val_dataset[28][6]), parseInt(val_dataset[29][6])],
            fill: false,
            borderColor: 'rgb(255,80,0)',
            tension: 0.1
        }]
    }
    const linechartdata_680 = {
        labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
        datasets: [{
            label: '480nm',
            data: [parseInt(val_dataset[0][7]), parseInt(val_dataset[1][7]), parseInt(val_dataset[2][7]), parseInt(val_dataset[3][7]), parseInt(val_dataset[4][7]), parseInt(val_dataset[5][7]), parseInt(val_dataset[6][7]), parseInt(val_dataset[7][7]), parseInt(val_dataset[8][7]), parseInt(val_dataset[9][7]), parseInt(val_dataset[10][7]), parseInt(val_dataset[11][7]), parseInt(val_dataset[12][7]), parseInt(val_dataset[13][7]), parseInt(val_dataset[14][7]), parseInt(val_dataset[15][7]), parseInt(val_dataset[16][7]), parseInt(val_dataset[17][7]), parseInt(val_dataset[18][7]), parseInt(val_dataset[19][7]), parseInt(val_dataset[20][7]), parseInt(val_dataset[21][7]), parseInt(val_dataset[22][7]), parseInt(val_dataset[23][7]), parseInt(val_dataset[24][7]), parseInt(val_dataset[25][7]), parseInt(val_dataset[26][7]), parseInt(val_dataset[27][7]), parseInt(val_dataset[28][7]), parseInt(val_dataset[29][7])],
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1
        }]
    }
    // const linechartdata_555 = {
    //     labels: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26", "t27", "t28", "t29", "t30"],
    //     datasets: [{
    //         label: '480nm',
    //         data: [parseInt(val_dataset[0][|]), parseInt(val_dataset[1][|]), parseInt(val_dataset[2][|]), parseInt(val_dataset[3][|]), parseInt(val_dataset[4][|]), parseInt(val_dataset[5][|]), parseInt(val_dataset[6][|]), parseInt(val_dataset[7][|]), parseInt(val_dataset[8][|]), parseInt(val_dataset[9][|]), parseInt(val_dataset[10][|]), parseInt(val_dataset[11][|]), parseInt(val_dataset[12][|]), parseInt(val_dataset[13][|]), parseInt(val_dataset[14][|]), parseInt(val_dataset[15][|]), parseInt(val_dataset[16][|]), parseInt(val_dataset[17][|]), parseInt(val_dataset[18][|]), parseInt(val_dataset[19][|]), parseInt(val_dataset[20][|]), parseInt(val_dataset[21][|]), parseInt(val_dataset[22][|]), parseInt(val_dataset[23][|]), parseInt(val_dataset[24][|]), parseInt(val_dataset[25][|]), parseInt(val_dataset[26][|]), parseInt(val_dataset[27][|]), parseInt(val_dataset[28][|]), parseInt(val_dataset[29][|])],
    //         fill: false,
    //         borderColor: 'rgb(164, 255, 0)',
    //         tension: 0.1
    //     }]
    // }

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

                        <div className="row" >
                            <div className="col text-center text-light">Line Chart</div>
                        </div>

                        <div className="row " >
                            <Line data={linechartdata_415} width={100} height={20} options={Options} />
                        </div>
                        <div className="row">
                            <Line data={linechartdata_445} width={100} height={15} options={Options} />
                        </div>
                        <div className="row">
                            <Line data={linechartdata_480} width={100} height={15} options={Options} />
                        </div>
                        <div className="row">
                            <Line data={linechartdata_515} width={100} height={15} options={Options} />
                        </div>
                        <div className="row">
                            <Line data={linechartdata_555} width={100} height={15} options={Options} />
                        </div>
                        <div className="row">
                            <Line data={linechartdata_590} width={100} height={15} options={Options} />
                        </div>
                        <div className="row">
                            <Line data={linechartdata_630} width={100} height={15} options={Options} />
                        </div>
                        <div className="row">
                            <Line data={linechartdata_680} width={100} height={15} options={Options} />
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}