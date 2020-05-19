import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <p>&copy; {data.site.siteMetadata.author}.</p>
    </footer>
  )
}

export default Footer
