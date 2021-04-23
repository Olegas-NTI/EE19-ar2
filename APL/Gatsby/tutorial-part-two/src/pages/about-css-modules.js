import React from "react"
//Syles are imported and they stored in a object that contains key of an style and value
import * as styles from "./about-css-modules.module.css"
import Container from "../components/container"
// Print out styles object
console.log(styles.user)

// Making <User /> component 
// styles.name imports name of each style required to be passed in
// props is where we will place our data in manually 
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Bella Poarch"
        avatar="https://i.pinimg.com/564x/31/22/14/312214a832b20264290c8da04efc094e.jpg"
        excerpt="I'm Bella Poarch. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Angry Cat"
        avatar="https://pbs.twimg.com/media/EsnBP3qVEAAS__2?format=jpg&name=240x240"
        excerpt="Cat outside, lion inside. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}