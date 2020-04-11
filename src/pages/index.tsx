import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import styled from 'styled-components'
import CategoriesMenu from '../components/CategoriesMenu'
import { EdgeNodeRecipe } from '../types/EdgeNodeRecipe'
import Cibamarsi from '../UI/Cibamarsi'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import { randomNumber } from '../utils/randomNumber'
import HeartBkg from '../UI/HeartBkg'
import MagicRecipe from '../components/MagicRecipe'
import UrgentAsk from '../components/UrgentAsk'
import InstagramExe from '../components/InstagramExe'

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

  const firstRandomRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])
  const secondRandomRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])

  const magicRecipe = React.useRef<EdgeNodeRecipe>(recipes[randomNumber(recipes.length - 1, 0)])

  console.log(firstRandomRecipe.current)

  return (
    <IndexLayout>
      <MagicRecipe linkTo={magicRecipe.current.node.fields.slug} />
      <WrapperHomePage>
        <Cibamarsi />
        <RecipeCard
          linkTo={firstRandomRecipe.current.node.fields.slug}
          selectedRecipe={firstRandomRecipe.current}
          style={{ gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 3, gridRowEnd: 4, justifySelf: 'center' }}
        />
        <CategoriesMenu categories={categories} />
        <UrgentAsk />
      </WrapperHomePage>
      <WrapperHomePage>
        <InstagramExe />
        <RecipeCard
          linkTo={secondRandomRecipe.current.node.fields.slug}
          selectedRecipe={secondRandomRecipe.current}
          style={{ gridColumnStart: 4, gridColumnEnd: 7, gridRowStart: 1, gridRowEnd: 3, justifySelf: 'center' }}
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
            ...frontmatter
          }
        }
      }
    }
  }
`
