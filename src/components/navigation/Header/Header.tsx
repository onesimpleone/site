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
      <PrimaryButton className={styles.button} title="Signup" />
      <PrimaryButton title="Login" />
    </div>
  </header>
)
