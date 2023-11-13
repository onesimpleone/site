import React from 'react'

import { Link } from 'gatsby'

import * as styles from './SecondaryButton.module.scss'
import * as presets from 'styles/presets.module.scss'

interface IProps {
  /** Button title */
  title: string

  /** Container style */
  className?: string

  /** Path */
  path?: string
}

export const SecondaryButton = ({ className, path = '/', title }: IProps) => {
  const styleSet = {
    navLink: `${presets.secondaryButton} ${styles.navLink}`,
    navLinkActive: `${presets.secondaryButton} ${styles.navLink}`,
  }

  return (
    <Link
      activeClassName={styleSet.navLinkActive}
      className={`${styleSet.navLink} ${className}`}
      to={path}
    >
      {title}
    </Link>
  )
}
