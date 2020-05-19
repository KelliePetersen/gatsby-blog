import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.link} to="/">Kellie Petersen</Link>
      <nav>
        <ul className={styles.list}>
          <li><Link className={styles.link} to="/">Home</Link></li>
          <li><Link className={styles.link} to="/about">About</Link></li>
          <li><Link className={styles.link} to="/blog">Blog</Link></li>
          <li><Link className={styles.link} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
