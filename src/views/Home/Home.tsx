import * as React from 'react'

import { HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './Home.module.scss'
import MetaBadge from 'assets/meta-badge.svg'
import { Bubble, PlatformBadge } from 'components'
import { Footer, Header } from 'components/layout'
import * as presets from 'styles/presets.module.scss'

export const Home = () => (
  <main>
    <Bubble className={styles.smallBubble} size="small" />
    <Bubble className={styles.bigBubble} size="big" />
    <section>
      <Header />
      <div className={styles.mainScreen}>
        <div className={styles.content}>
          <h1 className={presets.h1}>
            Business messaging app for{' '}
            <span className={presets.h1}>Instagram</span>
          </h1>
          <p>Simplify sales and customer service. Free access.</p>

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
        </div>

        <div className={styles.presentationDesktop}>
          <StaticImage
            alt="OneSimple mobile app interface"
            className={styles.phone}
            src="./interface.png"
          />
        </div>
      </div>
    </section>

    <div className={styles.presentation}>
      <StaticImage
        alt="OneSimple mobile app interface"
        className={styles.phone}
        src="./interface.png"
      />
    </div>

    <section>
      <div className={styles.secondScreen}>
        <div className={styles.officialMeta}>
          <p className={presets.h2}>Official Meta API</p>
          <div className={styles.metaBadge}>
            <MetaBadge />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
)

export const HomeHead: HeadFC = () => (
  <>
    <title>OneSimple</title>
    <meta
      content="kmiwvp601mnjrcmoj2aiki1mcd27ie"
      name="facebook-domain-verification"
    />
  </>
)
