import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { upperCase } from 'lodash'
import { Dida } from './Typography'
import { colors } from '../styles/variables'

const MoveSlideshow = keyframes`
    0% {
    left: 0;
  }
  100% {
    left: -2000px;
  }
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 25px 0px;
  border-bottom: 2px solid ${colors.rgb.magenta};
  font-family: monospace;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  user-select: none;
  & > p {
    color: ${colors.rgb.magenta};
    position: absolute;
    white-space: nowrap;
    font-size: 15px;
    letter-spacing: 1px;
    left: 0px;
    animation: ${MoveSlideshow} 25s linear infinite;
    top: 11px;
  }
`

const generateLongText = (groupWords: Array<string>) => {
  const text = groupWords.map(word => `$${upperCase(word)}! !TRY NOW!`)
  return [
    ...text,
    ...text,
    '😋',
    ...text,
    ...text,
    '🤩',
    ...text,
    ...text,
    '🤤',
    ...text,
    ...text,
    '😎',
    ...text,
    ...text,
    '🥰',
    ...text,
    ...text
  ]
}

export const MarqueeRecipe: React.FC<{ groupWords: Array<string> }> = ({ groupWords }) => {
  const text = generateLongText(groupWords)
  return (
    <Wrapper>
      <Dida>{text.map(t => t).join(' ')}</Dida>
    </Wrapper>
  )
}
