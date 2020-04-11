import * as React from 'react'
import styled, { keyframes, css } from 'styled-components'

const Pulsing = keyframes`
  0% {
    font-size: 15px;
    left: calc(50% - 10px);
  };
  15% {
    font-size: 20px;
    left: calc(50% - 12px);
  };
  20% {
    font-size: 15px;
    left: calc(50% - 10px);
  };
  30% {
    font-size: 20px
    left: calc(50% - 12px);
  };
  40% {
    font-size: 15px;
    left: calc(50% - 10px);
  };
  45% {
    font-size: 15px;
    left: calc(50% - 10px);
  };
  50% {
    font-size: 15px;
    left: calc(50% - 10px);
  };
  60% {
    font-size: 20px;
    left: calc(50% - 12px);
  };
  65% {
    font-size: 23px;
    left: calc(50% - 15px);
  };
  85% {
    font-size: 20px;
    left: calc(50% - 12px);
  };
  100% {
    font-size: 15px;
    left: calc(50% - 10px);
  }
`

const Wrapper = styled.div<{ heartOver: boolean }>`
  position: fixed;
  left: calc(50% - 10px);
  font-size: 15px;
  top: 50%;
  user-select: none;
  transition: left 0.2s, font-size 0.2s;

  ${props =>
    props.heartOver &&
    css`
      animation: ${Pulsing} 1.5s infinite;
    `}
`

const HeartBkg: React.FC = () => {
  const [hearthOver, setHover] = React.useState(false)

  React.useEffect(() => {
    if (hearthOver) {
      window.setTimeout(() => setHover(false), 8000)
    }
  }, [hearthOver])

  console.log(hearthOver)

  return (
    <Wrapper heartOver={hearthOver} onMouseOver={() => setHover(true)}>
      🖤
    </Wrapper>
  )
}

export default HeartBkg
