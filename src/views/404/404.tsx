import * as React from 'react'

import { HeadFC, Link } from 'gatsby'

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}

export const Error404 = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>{'Page not found'}</h1>
    <p style={paragraphStyles}>
      {'Sorry 😔, we couldn’t find what you were looking for.'}
      <br />
      <Link to="/">{'Go home'}</Link>
    </p>
  </main>
)

export const Error404Head: HeadFC = () => <title>{'Not found page'}</title>
