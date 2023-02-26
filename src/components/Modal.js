import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

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

let secretChecked = checkSecret;
console.log(checkSecret);
console.log(secretChecked);

export const ModalComponent = () => {
  const [show, setShow] = useState(secretChecked);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
