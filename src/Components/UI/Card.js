import react from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  return(
    <div className = {`${styles.card} ${props.className}`}>
      {props.children}
    </div>
  )
}

//great example of using two classes for styling, one defined in the Card Module
  //another coming through the props

export default Card