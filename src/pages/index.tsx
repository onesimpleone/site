import * as React from "react"
import { Link } from "gatsby"
/**
 * TODO: Добавить в tsconfig абсолютные пути.
 */
import "../components/index.sass"

import Header from '../components/Header/Header'

const IndexPage = () => {
  return (
    <main>
      <title>OneSimple</title>
      <Header />
      {/* <Link to="/about/">Go to page 2</Link> */}
      <a style={{display: 'flex', justifyContent: 'center'}} href="/app/">Go to App</a>
    </main>
  )
}

export default IndexPage
