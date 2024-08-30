import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './Blob.module.scss'

interface IProps {
  /** Display a blob of different size */
  size: 'small' | 'big'

  /** A name of the class with scss styles */
  className?: string
}

export const Blob = ({ className, size }: IProps) => {
  const styleSet = {
    container: `${styles.blob} ${className}`,
    size: size === 'small' ? styles.small : styles.big,
  }

  return (
    <div className={styleSet.container}>
      {size === 'small' ? (
        <StaticImage
          alt="Decorative blob"
          className={styles.small}
          placeholder="none"
          src="./small-blob.png"
        />
      ) : (
        <StaticImage
          alt="Decorative blob"
          className={styles.big}
          placeholder="none"
          src="./big-blob.png"
        />
      )}
    </div>
  )
}
