import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello, I'm Kellie Petersen.</h1>
      <p>Welcome to my site.</p>
      <Link to="/contact">Get in Touch</Link>
    </Layout>
  )
}

export default Home