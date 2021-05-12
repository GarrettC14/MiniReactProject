import Card from "../UI/Card";
import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key = {user.name + index}>
              {user.name} is ({user.age} Years Old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;

//pass in via props an array of data that we need to render
//this array could use the map function to return an <li> <Component> per item
