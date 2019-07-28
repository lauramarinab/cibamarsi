import * as React from 'react'
import { WrapperPostIt, PostItColor } from './styles'

interface Props {
  content: string | JSX.Element
  background?: PostItColor
  width?: string
  height?: string
  zIndex?: number
  style?: React.CSSProperties
}

const PostIt: React.FC<Props> = ({ background, content, width, height, zIndex, style }) => {
  return (
    <WrapperPostIt background={background} style={{ width, height, zIndex, ...style }}>
      {content}
    </WrapperPostIt>
  )
}

export default PostIt
