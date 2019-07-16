import * as React from 'react'
import styled, { keyframes, css } from 'styled-components'

const Pulsing = keyframes`
  0% {
    font-size: 15px
    left: calc(50% - 10px)
  }
  35% {
    font-size: 18px
    left: calc(50% - 12px)
  }
  65% {
    font-size: 25px
    left: calc(50% - 15px)
  }
  85% {
    font-size: 18px
    left: calc(50% - 12px)
  }
  100% {
    font-size: 15px
    left: calc(50% - 10px)
  }
`

const Wrapper = styled.div<{ heartOver: boolean }>`
  position: absolute;
  left: calc(50% - 10px);
  top: 50%;
  user-select: none;
  transition: left 0.2s, font-size 0.2s;
  ${props =>
    props.heartOver &&
    css`
      animation: ${Pulsing} 0.5s infinite;
    `}
`

const HeartBkg = () => {
  const [state, setState] = React.useState({
    hearthOver: false
  })

  React.useEffect(() => {
    if (state.hearthOver) {
      window.setTimeout(() => setState({ hearthOver: false }), 5000)
    }
  }, [state.hearthOver])

  return (
    <Wrapper heartOver={state.hearthOver} onMouseOver={() => setState({ hearthOver: true })}>
      🖤
    </Wrapper>
  )
}

export default HeartBkg
