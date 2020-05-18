import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Blog = () => {
  return (
    <Layout>
      <h1>Insights</h1>
      <p>Is calling your blog posts "insights" pretentious?</p>
      <Link to="/contact">Get in Touch</Link>
    </Layout>
  )
}

export default Blog