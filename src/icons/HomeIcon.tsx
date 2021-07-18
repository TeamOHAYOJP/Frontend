import React, { FC } from 'react'

type Props = {
  class?: string
  size?: number
  color?: string
}

export const HomeIcon: FC<Props> = (props: Props) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={props.size || 24}
        height={props.size || 24}
        fill={props.color || '#000'}
        viewBox="0 0 20 20"
    >
        <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
    </svg>
  )
}