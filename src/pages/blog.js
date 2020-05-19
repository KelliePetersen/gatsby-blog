import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import styles from './blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <h1>Insights</h1>
      <p>Is calling your blog posts "insights" pretentious?</p>
      <ul className={styles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={styles.post}>
              <Link to={edge.node.fields.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog