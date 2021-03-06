import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const About = () => {
  return (
    <Layout>
      <Head title="About me" />
      <h1>Who I am</h1>
      <p>Someone who spends 10 minutes trying to think of something interesting to write, and ends up with this.</p>
      <Link to="/contact">Get in Touch</Link>
    </Layout>
  )
}

export default About
