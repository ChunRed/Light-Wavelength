import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import FireBase, { readOnceWithGet, writeUserData } from './api/FireBase';
import "bootstrap/dist/css/bootstrap.css";
import { ColorChart } from './api/ColorChart';







export default function Home({ allPostsData }) {

  //value
  let Wavelength_List = [
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"]];
  let [RV_List, setRV_List] = useState(["0", "0", "0", "0", "0", "0", "0", "0"]);

  function Send() {
    //writeUserData(ID, Name, Date, Time);
  }

  function TimerCheck() {
    setInterval(() => {
      Wavelength_List.pop();
      Wavelength_List.unshift(readOnceWithGet() == '' ? ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'] : readOnceWithGet().split(","));



      for (let i = 0; i < Wavelength_List.length; i++) {
        document.querySelector('.msg-' + i).innerHTML = Wavelength_List[i];
      }

      let new_msg = [0, 0, 0, 0, 0, 0, 0, 0]
      for (let i = 0; i < Wavelength_List.length; i++) {
        for (let j = 0; j < 8; j++) {
          new_msg[j] += parseInt(Wavelength_List[i][j]);
        }
      }

      let rv_msg = [0, 0, 0, 0, 0, 0, 0, 0]
      for (let i = 0; i < 8; i++) {
        rv_msg[i] = new_msg[i] / 10;
      }

      setRV_List(rv_msg);


    }, 5000);
  }

  useEffect(() => {
    Wavelength_List.pop();
    Wavelength_List.unshift(readOnceWithGet() == '' ? ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'] : readOnceWithGet().split(","));

    for (let i = 0; i < Wavelength_List.length; i++) {
      document.querySelector('.msg-' + i).innerHTML = Wavelength_List[i];
    }

    let new_msg = [0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < Wavelength_List.length; i++) {
      for (let j = 0; j < 8; j++) {
        new_msg[j] += parseInt(Wavelength_List[i][j]);
      }
    }

    let rv_msg = [0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 8; i++) {
      rv_msg[i] = new_msg[i] / 10;
    }

    setRV_List(rv_msg);



    TimerCheck();

  }, [])



  return (
    <main>

      <div className="container-fluid">

        {/* Head Title */}
        <div className="row">

          <div className='col text-center h5 text-light m-3'>Light Wavelength</div>
        </div>


        {/* Input Card */}
        <div className="row mt-3 ">

          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>

          <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8  ">
            <input type="text" className="form-control color text-light" placeholder="recode" aria-label="recode" aria-describedby="button-addon2" ></input>
          </div>

          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>

        </div>

        {/* <div className="row mt-2 justify-content-center">
          <div className="w-75 input-group mb-3">
            <input type="text" className="form-control" placeholder="地點｜Location" aria-label="地點｜Location" aria-describedby="button-addon2" onChange={(e) => setName(e.target.value)}></input>
          </div>
        </div> */}


        {/* <div className="row mt-5 mb-3 justify-content-center">
          <button className="w-75 btn btn-outline-secondary" type="button" onClick={Send}>傳送｜Send</button>
        </div> */}


        {/* Recode Average */}
        <div className="row mt-3">

          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>


          <div className="col-5 col-sm-5 col-md-4 col-lg-4 col-xl-4" >
            
            <ul className="list-group ">
              <li className={[utilStyles.RVsetup, "RA-0", "list-group-item", "color"].join(" ")}>415nm : {RV_List[0]}</li>
              <li className={[utilStyles.RVsetup, "RA-1", "list-group-item", "color"].join(" ")}>445nm : {RV_List[1]}</li>
              <li className={[utilStyles.RVsetup, "RA-2", "list-group-item", "color"].join(" ")}>480nm : {RV_List[2]}</li>
              <li className={[utilStyles.RVsetup, "RA-3", "list-group-item", "color"].join(" ")}>515nm : {RV_List[3]}</li>
            </ul>
          </div>

          <div className="col-5 col-sm-5 col-md-4 col-lg-4 col-xl-4" >
            
            <ul className="list-group ">
              <li className={[utilStyles.RVsetup, "RA-4", "list-group-item", "color"].join(" ")}>555nm : {RV_List[4]}</li>
              <li className={[utilStyles.RVsetup, "RA-5", "list-group-item", "color"].join(" ")}>590nm : {RV_List[5]}</li>
              <li className={[utilStyles.RVsetup, "RA-6", "list-group-item", "color"].join(" ")}>630nm : {RV_List[6]}</li>
              <li className={[utilStyles.RVsetup, "RA-7", "list-group-item", "color"].join(" ")}>680nm : {RV_List[7]}</li>
            </ul>
          </div>

          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>
        </div>


        {/* Color  Chart*/}
        <div className="row ">
          <ColorChart
            val={RV_List}
          />
        </div>


        {/* Recode History */}

        <div className="row mt-5">
          <div className="col text-center text-light">Recode History</div>
        </div>
        <div className="row m-2">
          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>
          <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8" >
            
            <ul className="list-group ">
              <li className={[utilStyles.lisetup, "msg-0", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-1", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-2", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-3", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-4", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-5", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-6", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-7", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-8", "list-group-item", "color"].join(" ")}></li>
              <li className={[utilStyles.lisetup, "msg-9", "list-group-item", "color"].join(" ")}></li>

            </ul>
          </div>
          <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>
        </div>



      </div>





      <style jsx >{`

        .color{
          background-color: #000000;
          color: #ffffff;
        }

        
    `}</style>

      <style jsx global>{`
        body{
          background-color: #000000;
        }

        
      `}</style>


    </main>
  );
}

