import React, {useState} from "react";
import {Bootstrap} from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalComponent } from "./Modal";

// Easter Egg nr 2

const myKey = "jon";

export const SecretComponent = () => {

    let keyInput = ""

    document.addEventListener("keydown", (key) => {
        keyInput += key.key
        if (myKey === keyInput) {
            console.log('Success');
            return true;
        }
        else {
            setTimeout(() => {
                keyInput = ""
            }, 3000)
        }
    })
}