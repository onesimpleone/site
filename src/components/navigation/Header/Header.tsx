import React from 'react'

import { Link } from 'gatsby'

import * as styles from './Header.module.scss'
import { PrimaryButton } from 'components/buttons'
import { Logo } from 'components/graphics'

export const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <Logo />
    </Link>

    <div className={styles.menuButtons}>
      <PrimaryButton
        // className={styles.button}
        isExternal={true}
        path="https://docs.google.com/forms/d/e/1FAIpQLSc62D436PyYVExKy40TBSAR4M0Dm131R-rSj8tGhF3VtThx8A/viewform?pli=1"
        title="Signup"
      />
      {/* <PrimaryButton title="Login" /> */}
    </div>
  </header>
)
