import * as React from 'react'
import { WrapperPostIt, PostItBkgColor } from './styles'

interface Props {
  content: string | JSX.Element
  background?: PostItBkgColor
  width?: string
  height?: string
  zIndex?: number
  style?: React.CSSProperties
}

export const PostIt: React.FC<Props> = ({ background, content, width, height, zIndex, style }) => {
  return (
    <WrapperPostIt background={background} style={{ width, height, zIndex, ...style }}>
      {content}
    </WrapperPostIt>
  )
}
