import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

// Easter Egg nr 1

const myKey = "jon";

export const SecretComponent = () =>{
    let keyInput = ""

    document.addEventListener("keydown", (key) => {
        keyInput += key.key
        if(myKey === keyInput){
            // Modal goes here
        }
        else{
            setTimeout(() =>{
                keyInput = ""
            },2000)
        }
    })
}