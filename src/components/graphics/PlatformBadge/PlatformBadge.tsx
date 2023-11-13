import React from 'react'

import { AppStoreBadge, GooglePlayBadge, WebBadge } from './elements'

interface IProps {
  /** Badge type */
  type: 'appStore' | 'googlePlay' | 'web'

  /** Container style */
  className?: string
}

export const PlatformBadge = ({ className, type }: IProps) => {
  let Badge = WebBadge
  switch (type) {
    case 'appStore':
      Badge = AppStoreBadge
      break
    case 'googlePlay':
      Badge = GooglePlayBadge
      break
    default:
      Badge = WebBadge
  }

  return (
    <div className={className}>
      <Badge />
    </div>
  )
}
