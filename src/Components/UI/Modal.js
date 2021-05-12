import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";

import ReactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay onClick={props.onClick} title = {props.title} message = {props.message} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
