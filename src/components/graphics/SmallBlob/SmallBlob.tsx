import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './SmallBlob.module.scss'

interface IProps {
  className?: string
}

export const SmallBlob = ({ className }: IProps) => {
  const styleSet = {
    container: `${styles.blob} ${className}`,
  }

  return (
    <div className={styleSet.container}>
      <StaticImage
        alt="Decorative small blob"
        placeholder="none"
        src="./small-blob.png"
      />
    </div>
  )
}
