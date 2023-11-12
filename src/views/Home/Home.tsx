import * as React from 'react'

import { HeadFC, Link } from 'gatsby'

export const Home = () => (
  <main>
    <h1>{'Home'}</h1>
    <p>{'Under development'}</p>
    <Link to="/about">{'About'}</Link>
  </main>
)

export const HomeHead: HeadFC = () => <title>{'OneSimple'}</title>
