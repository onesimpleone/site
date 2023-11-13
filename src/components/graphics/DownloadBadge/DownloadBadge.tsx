import React from 'react'

import { AppStoreBadge, GooglePlayBadge, WebBadge } from './elements'

interface IProps {
  /** Badge type */
  type: 'appStore' | 'googlePlay' | 'web'

  /** Container style */
  className?: string
}

export const DownloadBadge = ({ className, type }: IProps) => {
  let BadgeType = WebBadge
  switch (type) {
    case 'appStore':
      BadgeType = AppStoreBadge
      break
    case 'googlePlay':
      BadgeType = GooglePlayBadge
      break
    default:
      BadgeType = WebBadge
  }

  return (
    <div className={className}>
      <BadgeType />
    </div>
  )
}
