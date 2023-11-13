import React from 'react'

import { Link } from 'gatsby-link'

import * as styles from './Logo.module.scss'
import { LogoName, LogoSign } from 'components/graphics/Logo/elements'
import * as presets from 'styles/presets.module.scss'

export const Logo = () => (
  <Link to="/">
    <div className={styles.container}>
      <div className={styles.logoIcon}>
        <LogoSign />
      </div>

      <div className={styles.nameAndDescriptor}>
        <div className={styles.name}>
          <LogoName />
        </div>
        <p className={presets.caption}>
          Designed for <span className={presets.caption}>Meta</span>
        </p>
      </div>
    </div>
  </Link>
)
