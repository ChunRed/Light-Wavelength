import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push } from "firebase/database";

let data = '';


//MARK:FIREBASE INIT
const firebaseConfig = {
    apiKey: "AIzaSyCXyF5bvxngmcqu4pasWd7zdb0YqpZLFDI",
    authDomain: "dome-test-714cb.firebaseapp.com",
    databaseURL: "https://dome-test-714cb-default-rtdb.firebaseio.com",
    projectId: "dome-test-714cb",
    storageBucket: "dome-test-714cb.firebasestorage.app",
    messagingSenderId: "66308364634",
    appId: "1:66308364634:web:fc05e54fbb07a29b017b63",
    measurementId: "G-P8SQ6K6T3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




//MARK:READ DATA
export function readOnceWithGet() {
    const dbRef = ref(getDatabase());
    

    get(child(dbRef, '/light')).then((snapshot) => {
        if (snapshot.exists()) {

            data= snapshot.val();

            //console.log(data);
            

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    return data;
}





//MARK:WRITE DATA
export function writeUserData(decibel, frequency, color, shape) {
    const db = getDatabase();

    set(ref(db, '/data/' + (firebase_data_length)), [decibel, frequency, color, shape]);
    console.log("send message: " + decibel.toString() + " : " + frequency.toString() + " : " + color + " : " + shape + " done");
}