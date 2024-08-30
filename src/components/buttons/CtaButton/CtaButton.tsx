import React from 'react'

import * as styles from './CtaButton.module.scss'
import * as presets from 'styles/presets.module.scss'

interface IProps {
  /** Button title */
  title: string

  /** Container style */
  className?: string
}

export const CtaButton = ({ className, title }: IProps) => (
  <div className={styles.container}>
    <a
      className={`${presets.ctaButton} ${styles.button} ${className}`}
      href="https://forms.gle/axdDXjw7k4HpR1Z39"
      target="_blank"
    >
      {title}
    </a>
  </div>
)
