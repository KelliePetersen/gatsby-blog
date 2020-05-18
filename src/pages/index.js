import React from "react"
import { Link } from 'gatsby'

const Home = () => {
  return (
    <div>
      <h1>Hello, I'm Kellie Petersen.</h1>
      <p>Welcome to my site.</p>
      <Link to="/about">What's a Kellie?</Link><br />
      <Link to="/blog">Read my Mind</Link><br />
      <Link to="/contact">Get in Touch</Link>
    </div>
  )
}

export default Home