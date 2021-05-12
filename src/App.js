import NewUser from "./Components/NewUser/NewUser";
import UserList from "./Components/NewUser/UserList";
import { useState, Fragment } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  //I know that two props will be passed up, name and

  const addUserHandler = (userName, userAge) => {
    setUserData((prevState) => {
      return [...prevState, { name: userName, age: userAge }];
    });
  };

  return (
    <Fragment>
      <NewUser getUserData={addUserHandler} />
      <UserList users={userData} />
    </Fragment>
  );
}

export default App;
