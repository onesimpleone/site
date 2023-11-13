import React from 'react'

import { Link } from 'gatsby'

import * as styles from './PrimaryButton.module.scss'
import * as presets from 'styles/presets.module.scss'

interface IProps {
  /** Button title */
  title: string

  /** Container style */
  className?: string

  /** Path */
  path?: string
}

export const PrimaryButton = ({ className, path = '/', title }: IProps) => {
  const styleSet = {
    navLink: `${presets.primaryButton} ${styles.navLink}`,
    navLinkActive: `${presets.primaryButton} ${styles.navLink}`,
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
