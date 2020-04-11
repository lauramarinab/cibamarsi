import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  pointer-events: none;
  & > div {
    height: calc(100vh - 52px);
    position: relative;
    left: -10px;
  }

  & > div > span {
    font-family: 'Fira Code Regular';
    -webkit-text-stroke: 2px ${colors.rgb.verde};
    -webkit-text-fill-color: transparent;
    user-select: none;
  }
`

interface Props {
  text: string
}

const TitleRecipe: React.FC<Props> = ({ text }) => {
  const splittedText = text.split(' ')

  return (
    <Wrapper>
      <div>
        {splittedText.map((t, i) => (
          <span style={{ fontSize: 80 }} key={i}>{`${t} `}</span>
        ))}
      </div>
    </Wrapper>
  )
}

export default TitleRecipe
