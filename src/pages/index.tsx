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
import { PostItBkgColor } from '../components/PostIt/styles'
import PostIt from '../components/PostIt/PostIt'
import { Dida } from '../UI/Typography'
import { ButtonWindows } from '../components/Windows/styles'

const WrapperHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(8, calc(100vw / 8));
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
  openAlert: boolean
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const recipes = data.allMarkdownRemark.edges
  const categories = data.allMarkdownRemark.group

  const randomRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])

  const [state, setState] = React.useState<State>({ openAlert: false })

  return (
    <IndexLayout>
      <WrapperHomePage>
        <Cibamarsi />
        <RecipeCard
          linkTo={randomRecipe.current.node.fields.slug}
          selectedRecipe={randomRecipe.current}
          style={{ gridColumn: '2 / span 3', gridRowStart: 4 }}
        />
        <CategoriesMenu categories={categories} />
      </WrapperHomePage>
      <WrapperHomePage>
        <PostIt
          style={{ gridColumn: '2 / span 3', gridRowStart: 2, height: 250 }}
          background={PostItBkgColor.rosino}
          content={
            <>
              <img style={{ width: '100%' }} src="https://www.instagram.com/p/BxXZCaXFVfX/media" />
              <Dida style={{ marginTop: 5 }}>since 1992</Dida>
            </>
          }
        />
        <Windows
          style={{ gridColumn: '6 / span 3', gridRowStart: 4 }}
          onClickClose={() => console.log('chiuso!')}
          onClickAsk={() => setState({ openAlert: true })}
          headerLabel="Warning"
          bodyWindows={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Dida>Ti piace cucinare?</Dida>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 20 }}>
                <ButtonWindows style={{ width: '30%', height: 30 }}>si</ButtonWindows>
                <ButtonWindows style={{ width: '30%', height: 30 }}>no</ButtonWindows>
              </div>
            </div>
          }
        />
        {state.openAlert && (
          <Windows
            style={{ gridColumn: '5 / span 3', gridRowStart: 3, top: 50, left: 50 }}
            onClickClose={() => setState({ openAlert: false })}
          />
        )}
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
