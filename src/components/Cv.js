import React from "react"
import { Container } from "react-bootstrap"


export let CvComponent = () => {
    function GetWorkExp() {
        fetch('resume.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                data.forEach(element => {
                    const markup = `<li>${element.name},  ${element.position},  ${element.startdatum} - ${element.slutdatum}</li>`;


                    document.querySelector('#work').insertAdjacentHTML('beforeend', markup)
                });
            })
            .catch(error => console.log(error));
    };
    GetWorkExp();

    function GetEduData() {
        fetch('education.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                data.forEach(element => {
                    const markup = `<li>${element.name},  ${element.position},  ${element.startdatum} - ${element.slutdatum}</li>`;


                    document.querySelector('#edu').insertAdjacentHTML('beforeend', markup)
                });
            })
            .catch(error => console.log(error));
    };
    GetEduData();

    return (
        <div className="px-2 py-2">
            <div id="resume">
                <h1>Arbetslivserfarenhet:</h1>
                <ul id="work"></ul>

                <h1>Utdbildning:</h1>
                <ul id="edu"></ul>
            </div>
        </div>
    )
}


