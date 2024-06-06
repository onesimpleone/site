import React from 'react'

import { Link } from 'gatsby'

import * as styles from './SecondaryButton.module.scss'
import * as presets from 'styles/presets.module.scss'

interface IProps {
  /** Button title */
  title: string

  /** Container style */
  className?: string

  /** Return Gatsby Link component */
  isNavigational?: boolean

  /** Path */
  path?: string
}

export const SecondaryButton = ({
  className,
  isNavigational,
  path = '/',
  title,
}: IProps) => {
  const styleSet = {
    navLink: `${presets.secondaryButton} ${styles.navLink}`,
    navLinkActive: `${presets.secondaryButton} ${styles.navLink}`,
  }

  return isNavigational ? (
    <Link
      activeClassName={styleSet.navLinkActive}
      className={`${styleSet.navLink} ${className}`}
      to={path}
    >
      {title}
    </Link>
  ) : (
    <a
      className={`${styleSet.navLink} ${className}`}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title}
    </a>
  )
}
