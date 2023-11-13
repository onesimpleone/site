import React from 'react'

import * as styles from './Footer.module.scss'
import { SecondaryButton } from 'components/buttons'
import * as presets from 'styles/presets.module.scss'

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.links}>
        <SecondaryButton
          className={styles.linkButton}
          path="/about"
          title="About"
        />
        <SecondaryButton
          className={styles.linkButton}
          path="/terms"
          title="Terms"
        />
        <SecondaryButton
          className={styles.linkButton}
          path="/policy"
          title="Policy"
        />
      </div>

      <p className={`${presets.paragraph} ${styles.copyright}`}>
        © 2023 OneSimple. All rights reserved
      </p>
    </div>
  </footer>
)
