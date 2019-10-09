import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import * as d3 from 'd3'
import { RecipeContext } from '../providers/RecipeProvider'

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  pointer-events: none;

  & > svg > text {
    font-size: 9vw;
    stroke: ${colors.rgb.verde};
    stroke-width: 2;
    fill: none;
    user-select: none;
    font-family: 'Fira Code Regular';
    white-space: nowrap;
  }
`

interface Props {
  text: string
}

const SvgTitleRecipe: React.FC<Props> = ({ text }) => {
  const idWrapperRef = useRef<string>(v4())
  const idTitleRef = useRef<string>(v4())
  const idSvgRef = useRef<string>(v4())

  const { tspanHeight, onChangeTspanHeight } = React.useContext(RecipeContext)
  console.log(tspanHeight)

  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

  const [state, setState] = useState({
    viewportWidth
  })

  const handleResize = useRef(() => {
    const newViewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    setState(state => ({ ...state, viewportWidth: newViewportWidth }))
  })

  const getElHeight = () => {
    const svg = document.getElementById(idSvgRef.current)

    const textTestSvg = d3
      .select(svg)
      .append('text')
      .attr('id', 'textTest')

    textTestSvg
      .append('tspan')
      .attr('id', 'tspanTest')
      .text('prova')
      .style('opacity', 0)

    const textTest = document.getElementById('textTest')
    const tspanTest = document.getElementById('tspanTest')

    if (textTest && tspanTest) {
      const elHeight = tspanTest.getBoundingClientRect().height

      onChangeTspanHeight(elHeight)

      textTest.remove()
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize.current)

    getElHeight()

    return () => {
      window.removeEventListener('resize', handleResize.current)
    }
  }, [])

  useEffect(() => {
    getElHeight()
  }, [state.viewportWidth])

  const buildWordsGroup = (text: string, viewportWidth: number) => {
    const initialWords = text.split(' ')

    return initialWords
  }

  const xPosition = viewportWidth >= 2030 ? -20 : viewportWidth >= 1760 ? -15 : -10

  return (
    <Wrapper id={idWrapperRef.current}>
      <svg height="100vh" width="100vw" id={idSvgRef.current}>
        <text x={0} id={idTitleRef.current} dominantBaseline="start">
          {buildWordsGroup(text, state.viewportWidth).map((word, i) => (
            <tspan key={i} x={xPosition} dy={tspanHeight}>
              {word}
            </tspan>
          ))}
        </text>
      </svg>
    </Wrapper>
  )
}

export default SvgTitleRecipe
