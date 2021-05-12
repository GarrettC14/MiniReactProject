import { useState, Fragment, useRef } from "react";

import styles from "./NewUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorState, setErrorState] = useState();

  const addNewUser = (event) => {
    //this will be a pointer to a function that renders the new user to the screen
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    //form / type validation
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorState({
        title: "Onsubmit error",
        message: "cannot submit a name or age with empty feild",
      });
      return;
    }
    //check that enteredAge is a number greater then 1?
    //type casting in Java, use the + operator
    if (+enteredAge < 1) {
      setErrorState({
        title: "Onsubmit error",
        message: "cannot input a value less then 0 or below",
      });
      return;
    }
    props.getUserData(enteredName, enteredAge);
    ageInputRef.current.value = '';
    nameInputRef.current.value = '';

  };
  //form validation - how to check for incorrect values?


  const manageErrorState = () => {
    setErrorState((errorState) => !errorState);
  };

  return (
    <Fragment>
      {errorState && (
        <Modal
          title={errorState.title}
          message={errorState.message}
          onClick={manageErrorState}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addNewUser}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (in Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit" onClick={addNewUser}>
            Add User
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default NewUser;
