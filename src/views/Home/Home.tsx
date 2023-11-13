import * as React from 'react'

import { HeadFC, Link } from 'gatsby'

import * as styles from './Home.module.scss'

export const Home = () => (
  <main>
    <h1 className={styles.header}>{'Home'}</h1>
    <p>{'Under development'}</p>
    <Link to="/about">{'About'}</Link>
  </main>
)

export const HomeHead: HeadFC = () => <title>{'OneSimple'}</title>
