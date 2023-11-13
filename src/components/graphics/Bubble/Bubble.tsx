import React from 'react'

import * as styles from './Bubble.module.scss'

interface IProps {
  size: 'small' | 'big'

  className?: string
}

export const Bubble = ({ className, size }: IProps) => {
  const styleSet = {
    container: `${styles.bubble} ${className}`,
    size: size === 'small' ? styles.small : styles.big,
  }

  return (
    <div className={styleSet.container}>
      <div className={styleSet.size} />
    </div>
  )
}
