import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import styled from 'styled-components'
import CategoriesMenu from '../components/CategoriesMenu'
import { EdgeNodeRecipe } from '../type/EdgeNodeRecipe'
import Cibamarsi from '../UI/Cibamarsi'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import { randomNumber } from '../utils/randomNumber'
import HeartBkg from '../UI/HeartBkg'
import Windows from '../components/Windows/Windows'
import PostIt from '../components/PostIt/PostIt'
import { Dida } from '../UI/Typography'
import { ButtonWindows } from '../components/Windows/styles'
import MagicRecipe from '../components/MagicRecipe'

const WrapperHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(6, calc(100vh / 6));
`

interface allMarkdownRemark {
  allMarkdownRemark: {
    totalCount: number
    group: Array<{ fieldValue: string }>
    edges: Array<EdgeNodeRecipe>
  }
}

interface Props {
  data: allMarkdownRemark
}

interface State {
  openAlertA: boolean
  openAlertB: boolean
  openAlertC: boolean
  openAskWindow: boolean
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const recipes = data.allMarkdownRemark.edges
  const categories = data.allMarkdownRemark.group

  const randomRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])

  const magicRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])

  const [state, setState] = React.useState<State>({ openAlertA: false, openAlertB: false, openAlertC: false, openAskWindow: false })

  React.useEffect(() => {
    if (state.openAlertA) {
      setTimeout(() => {
        setState({ ...state, openAlertB: true })
      }, 300)
    }
  }, [state.openAlertA])

  React.useEffect(() => {
    if (state.openAlertB) {
      setTimeout(() => {
        setState({ ...state, openAlertC: true })
      }, 400)
    }
  }, [state.openAlertB])

  React.useEffect(() => {
    if (state.openAlertA || state.openAlertB || state.openAlertC) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  })

  return (
    <IndexLayout>
      <MagicRecipe linkTo={magicRecipe.current.node.fields.slug} />
      <WrapperHomePage>
        <Cibamarsi />
        <RecipeCard
          linkTo={randomRecipe.current.node.fields.slug}
          selectedRecipe={randomRecipe.current}
          style={{ gridColumnStart: 2, gridColumnEnd: 7, gridRowStart: 3, gridRowEnd: 6 }}
        />
        <CategoriesMenu categories={categories} />

        <Windows
          style={{ gridColumnStart: 9, gridColumnEnd: 13, gridRowStart: 5, gridRowEnd: 6, height: 130 }}
          onClickClose={() => setState({ ...state, openAlertA: true })}
          onClickAsk={() => setState({ ...state, openAskWindow: true })}
          headerLabel="Warning"
          bodyWindows={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Dida style={{ marginTop: 5 }}>Ti piace cucinare?</Dida>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 15 }}>
                <ButtonWindows style={{ width: '30%', height: 30 }}>Si</ButtonWindows>
                <ButtonWindows style={{ width: '30%', height: 30 }}>No</ButtonWindows>
              </div>
            </div>
          }
        />
        {state.openAskWindow && (
          <Windows
            style={{ gridColumnStart: 9, gridColumnEnd: 13, gridRowStart: 5, gridRowEnd: 6, top: -50, left: -50 }}
            onClickClose={() => setState({ ...state, openAskWindow: false })}
          />
        )}
        {state.openAlertA && (
          <Windows
            style={{ gridColumnStart: 9, gridColumnEnd: 13, gridRowStart: 5, gridRowEnd: 6, top: -30, left: -70, zIndex: 2 }}
            onClickClose={() => setState({ ...state, openAlertA: false })}
            headerLabel="Warning1"
            bodyWindows={<Dida>Prova</Dida>}
          />
        )}
        {state.openAlertB && (
          <Windows
            style={{ gridColumnStart: 9, gridColumnEnd: 13, gridRowStart: 5, gridRowEnd: 6, top: -40, left: -40, zIndex: 2 }}
            onClickClose={() => setState({ ...state, openAlertB: false })}
            headerLabel="Warning2"
            bodyWindows={<Dida>Prova</Dida>}
          />
        )}
        {state.openAlertC && (
          <Windows
            style={{ gridColumnStart: 9, gridColumnEnd: 13, gridRowStart: 5, gridRowEnd: 6, top: -20, left: -60, zIndex: 2 }}
            onClickClose={() => setState({ ...state, openAlertC: false })}
            headerLabel="Warning3"
            bodyWindows={<Dida>Prova</Dida>}
          />
        )}
        {(state.openAlertA || state.openAlertB || state.openAlertC) && (
          <div style={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: 1 }}></div>
        )}
      </WrapperHomePage>
      <WrapperHomePage>
        <PostIt
          style={{ gridColumnStart: 12, gridColumnEnd: 14, gridRowStart: 2, gridRowEnd: 4 }}
          height="250px"
          background="azzurro"
          content={
            <>
              <img style={{ width: '100%' }} src="https://www.instagram.com/p/BxXZCaXFVfX/media" />
              <Dida style={{ marginTop: 5 }}>since 1992</Dida>
            </>
          }
        />
      </WrapperHomePage>
      <HeartBkg />
    </IndexLayout>
  )
}

export default IndexPage

export const listRecipeQuery = graphql`
  query ListRecipeQuery {
    allMarkdownRemark {
      totalCount
      group(field: frontmatter___category) {
        fieldValue
      }
      edges {
        node {
          fields {
            layout
            slug
          }
          excerpt(format: HTML)
          frontmatter {
            title
            description
            date
            difficulty
            category
            tags
            image {
              childImageSharp {
                resize(width: 960, height: 540) {
                  src
                }
                fluid(maxWidth: 786) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
