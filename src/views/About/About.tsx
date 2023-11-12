import * as React from 'react'

import { HeadFC, Link } from 'gatsby'

import * as styles from './About.module.scss'

export const About = () => (
  <main>
    <h1 className={styles.header}>{'Hi from the second page'}</h1>
    <p>{'Welcome to page 2'}</p>
    <Link to="/">{'Go back to the homepage'}</Link>
  </main>
)

export const AboutHead: HeadFC = () => <title>{'About'}</title>
