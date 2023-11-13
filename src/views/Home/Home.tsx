import * as React from 'react'

import { HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './Home.module.scss'
import { Bubble, MetaBadge, PlatformBadge } from 'components'
import { Footer, Header } from 'components/layout'
import * as presets from 'styles/presets.module.scss'

export const Home = () => (
  <>
    <Bubble className={styles.smallBubble} size="small" />
    <Bubble className={styles.bigBubble} size="big" />
    <main className={styles.main}>
      <Header />
      <div className={styles.mainScreen}>
        <div className={styles.content}>
          <h1 className={presets.h1}>
            Business messaging app for{' '}
            <span className={presets.h1}>Instagram</span>
          </h1>
          <p>Simplify sales and customer service. Free access.</p>

          <div className={styles.downloadButtons}>
            <a href="https://forms.gle/axdDXjw7k4HpR1Z39" target="_blank">
              <PlatformBadge className={styles.button} type="appStore" />
            </a>
            <a href="https://forms.gle/axdDXjw7k4HpR1Z39" target="_blank">
              <PlatformBadge className={styles.button} type="googlePlay" />
            </a>
            <a href="https://forms.gle/axdDXjw7k4HpR1Z39" target="_blank">
              <PlatformBadge className={styles.button} type="web" />
            </a>
          </div>
        </div>

        <div className={styles.presentation}>
          <StaticImage
            alt="OneSimple mobile app interface"
            className={styles.phone}
            src="./interface.png"
          />
        </div>
      </div>

      <div className={styles.secondScreen}>
        <div className={styles.officialMeta}>
          <p className={presets.h2}>Official Meta API</p>
          <MetaBadge className={styles.metaBadge} />
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export const HomeHead: HeadFC = () => <title>OneSimple</title>
