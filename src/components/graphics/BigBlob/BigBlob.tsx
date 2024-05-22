import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './BigBlob.module.scss'

interface IProps {
  className?: string
}

export const BigBlob = ({ className }: IProps) => {
  const styleSet = {
    container: `${styles.blob} ${className}`,
  }

  return (
    <div className={styleSet.container}>
      <StaticImage
        alt="Decorative big blob"
        placeholder="none"
        src="./big-blob.png"
      />
    </div>
  )
}
