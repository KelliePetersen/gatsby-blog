import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.heading} to="/">Kellie Petersen</Link>
      <nav>
        <ul className={styles.list}>
          <li><Link className={styles.link} activeClassName={styles.activeLink} to="/">Home</Link></li>
          <li><Link className={styles.link} activeClassName={styles.activeLink} to="/about">About</Link></li>
          <li><Link className={styles.link} activeClassName={styles.activeLink} to="/blog">Blog</Link></li>
          <li><Link className={styles.link} activeClassName={styles.activeLink} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
