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
    font-size: 10vw;
    stroke: ${colors.rgb.verde};
    stroke-width: 2;
    fill: none;
    user-select: none;
    font-family: 'Fira Code Regular';
    white-space: nowrap;
  }
`

const svgTextMultiline = (element: HTMLElement, width: number, y: number) => {
  const text = element.innerHTML
  const words = text.split(' ')
  let line = ''

  debugger
  element.innerHTML = '<tspan id="PROCESSING">busy</tspan >'

  for (var n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    const testElem = document.getElementById('PROCESSING')
    /*  Add line in testElement */
    if (testElem) {
      testElem.innerHTML = testLine
      /* Messure textElement */
      var metrics = testElem.getBoundingClientRect()
      const testWidth = metrics.width

      if (testWidth > width && n > 0) {
        element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + '</tspan>'
        line = words[n] + ' '
      } else {
        line = testLine
      }
    }
  }

  element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + '</tspan>'
  const testEl = document.getElementById('PROCESSING')
  testEl ? testEl.remove() : null
}

interface Props {
  text: string
}

const SvgTitleRecipe: React.FC<Props> = ({ text }) => {
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

    const textSvgElement = document.getElementById(idTitleRef.current)

    if (textSvgElement) {
      svgTextMultiline(textSvgElement, state.viewportWidth, state.textHeight - 20)
    }

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
          {text}
        </text>
      </svg>
    </Wrapper>
  )
}

export default SvgTitleRecipe
