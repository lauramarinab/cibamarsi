import * as React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import styled from 'styled-components'
import CategoriesMenu from '../components/CategoriesMenu'
import { EdgeNodeRecipe } from '../type/EdgeNodeRecipe'
import Cibamarsi from '../UI/Cibamarsi'
import RecipeCard from '../components/RecipeCard'
import { randomNumber } from '../utils/randomNumber'
import HeartBkg from '../UI/HeartBkg'

const WrapperHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(8, calc(100vw / 8));
  grid-template-rows: repeat(6, calc(100vh / 6));
`

interface IndexPageProps {
  allMarkdownRemark: {
    totalCount: number
    group: Array<{ fieldValue: string }>
    edges: Array<EdgeNodeRecipe>
  }
}

const IndexPage: React.FC<{ data: IndexPageProps }> = ({ data }) => {
  const recipes = data.allMarkdownRemark.edges
  const categories = data.allMarkdownRemark.group

  const randomRecipe = recipes[randomNumber(recipes.length - 1, 0)]

  return (
    <IndexLayout>
      <WrapperHomePage>
        <Cibamarsi />
        <RecipeCard selectedRecipe={randomRecipe} style={{ gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 4 }} />
        {/* <PostIt
          background={PostItBkgColor.rosino}
          content={
            <>
            <img style={{ width: '100%' }} src="https://www.instagram.com/p/BxXZCaXFVfX/media" />
            <Dida style={{ marginTop: 5 }}>since 1992</Dida>
            </>
          }
        /> */}
        <CategoriesMenu categories={categories} />
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
