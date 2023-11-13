import React from 'react'

import { Link } from 'gatsby'

import * as styles from './PrimaryButton.module.scss'
import * as presets from 'styles/presets.module.scss'

interface IProps {
  /** Button title */
  title: string

  /** Container style */
  className?: string

  /** Wrap in a tag when external */
  isExternal?: boolean

  /** Path */
  path?: string
}

export const PrimaryButton = ({
  className,
  isExternal,
  path = '/',
  title,
}: IProps) => {
  const styleSet = {
    navLink: `${presets.primaryButton} ${styles.navLink}`,
  }

  return isExternal ? (
    <a
      className={`${styleSet.navLink} ${className}`}
      href={path}
      target="_blank"
    >
      {title}
    </a>
  ) : (
    <Link className={`${styleSet.navLink} ${className}`} to={path}>
      {title}
    </Link>
  )
}
