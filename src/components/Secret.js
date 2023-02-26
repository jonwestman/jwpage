import React, {useState} from "react";
import {Bootstrap} from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Easter Egg nr 2

const myKey = "jon";

let checkSecret = false;

export const SecretComponent = () => {

    let keyInput = ""

    document.addEventListener("keydown", (key) => {
        keyInput += key.key
        if (myKey === keyInput) {
            console.log('Success');
            //Modal goes here
            checkSecret = true;
        }
        else {
            setTimeout(() => {
                keyInput = ""
            }, 3000)
        }
    })
}