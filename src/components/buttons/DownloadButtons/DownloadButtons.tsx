import React from 'react'

import * as styles from './DownloadButtons.module.scss'
import { PlatformBadge } from 'components/graphics'

export const DownloadButtons = () => (
  <div className={styles.downloadButtons}>
    <a
      className={styles.button}
      href="https://forms.gle/axdDXjw7k4HpR1Z39"
      target="_blank"
    >
      <PlatformBadge type="appStore" />
    </a>
    <a
      className={styles.button}
      href="https://forms.gle/axdDXjw7k4HpR1Z39"
      target="_blank"
    >
      <PlatformBadge type="googlePlay" />
    </a>
    <a
      className={styles.button}
      href="https://forms.gle/axdDXjw7k4HpR1Z39"
      target="_blank"
    >
      <PlatformBadge type="web" />
    </a>
  </div>
)
