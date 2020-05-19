import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.scss'
import styles from './layout.module.scss'

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
