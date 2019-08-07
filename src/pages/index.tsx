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
import PostIt from '../components/PostIt/PostIt'
import { Dida } from '../UI/Typography'
import MagicRecipe from '../components/MagicRecipe'
import UrgentAsk from '../components/UrgentAsk'

const WrapperHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
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

const IndexPage: React.FC<Props> = ({ data }) => {
  const recipes = data.allMarkdownRemark.edges
  const categories = data.allMarkdownRemark.group

  const randomRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])

  const magicRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])

  return (
    <IndexLayout>
      <MagicRecipe linkTo={magicRecipe.current.node.fields.slug} />
      <WrapperHomePage>
        <Cibamarsi />
        <RecipeCard
          linkTo={randomRecipe.current.node.fields.slug}
          selectedRecipe={randomRecipe.current}
          style={{ gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 3, gridRowEnd: 4, justifySelf: 'center' }}
        />
        <CategoriesMenu categories={categories} />
        <UrgentAsk />
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
