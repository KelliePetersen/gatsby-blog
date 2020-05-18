import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <h1>Hello, I'm Kellie Petersen.</h1>
      <p>Welcome to my site.</p>
      <Link to="/contact">Get in Touch</Link>
    </Layout>
  )
}

export default Home