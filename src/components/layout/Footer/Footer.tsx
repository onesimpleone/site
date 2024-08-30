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
          isNavigational={false}
          path="/documents/terms.html"
          title="Terms"
        />
        <SecondaryButton
          className={styles.linkButton}
          isNavigational={false}
          path="/documents/privacy.html"
          title="Privacy"
        />
        <SecondaryButton
          className={styles.linkButton}
          isNavigational={false}
          path="/documents/cookies.html"
          title="Cookies"
        />
      </div>

      <p className={`${presets.paragraph} ${styles.copyright}`}>
        © 2024 OneSimple, Inc. All rights reserved.
      </p>
    </div>
  </footer>
)
