import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Home" />
      <p>What a world</p>
      <img
        src="https://source.unsplash.com/user/erondu/400x300"
        alt=""
      />
    </div>
  )
}
