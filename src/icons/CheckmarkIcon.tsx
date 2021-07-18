import React, { FC } from 'react'

type Props = {
  class?: string
  size?: number
  color?: string
}

export const CheckmarkIcon: FC<Props> = (props: Props) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={props.size || 24}
        height={props.size || 24}
        fill={props.color || '#000'}
        viewBox="0 0 20 20"
    >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
    </svg>
  )
}