import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import styles from './blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM, Do, YYYY")
          id
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Insights</h1>
      <p>Is calling your blog posts "insights" pretentious?</p>
      <ul className={styles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={styles.post} key={edge.node.id}>
              <Link to={edge.node.slug}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog