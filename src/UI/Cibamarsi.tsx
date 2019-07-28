import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import styled from 'styled-components'
import { colors } from '../styles/variables'

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  pointer-events: none;

  & > svg > text {
    font-size: 13vw;
    stroke: ${colors.rgb.magenta};
    stroke-width: 2;
    fill: none;
    user-select: none;
    font-family: 'Fira Code Regular';
  }
`

const Cibamarsi: React.FC = () => {
  const idWrapperRef = useRef<string>(v4())
  const idTitleRef = useRef<string>(v4())
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

  const [state, setState] = useState({
    textHeight: 0,
    viewportWidth
  })

  const handleResize = useRef(() => {
    const newViewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    setState(state => ({ ...state, viewportWidth: newViewportWidth }))
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize.current)
    return () => {
      window.removeEventListener('resize', handleResize.current)
    }
  }, [])

  useEffect(() => {
    const title = document.getElementById(idTitleRef.current)
    if (title) {
      const height = title.getBoundingClientRect().height
      setState({ ...state, textHeight: height })
    }
  }, [state.viewportWidth])

  const xPosition = state.viewportWidth >= 2030 ? -30 : state.viewportWidth >= 1760 ? -25 : -20

  return (
    <Wrapper id={idWrapperRef.current}>
      <svg height={state.textHeight} width="100vw">
        <text x={xPosition} y={state.textHeight - 20} id={idTitleRef.current} dominantBaseline="start">
          cibamarsi
        </text>
      </svg>
    </Wrapper>
  )
}

export default Cibamarsi
