import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  pointer-events: none;
  position: absolute;
  left: -15px;
  top: 15px;
`

const Title = styled.div`
  font-size: 13vw;
  -webkit-text-stroke: 2px ${colors.rgb.magenta};
  -webkit-text-fill-color: transparent;
  user-select: none;
  font-family: 'Fira Code Regular';
`

const Cibamarsi: React.FC = () => {
  return (
    <Wrapper>
      <Title>cibamarsi</Title>
    </Wrapper>
  )
}

export default Cibamarsi
