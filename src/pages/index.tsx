import * as React from 'react'
import { graphql } from 'gatsby'

import Container from '../components/Container'
import IndexLayout from '../layouts'
import styled from 'styled-components'
import { PostIt } from '../components/PostIt'
import { PostItBkgColor } from '../components/PostIt/styles'
import { Dida } from '../UI/Typography'
import RecipeList from '../components/RecipeList'

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, calc(100% / 6));
`

const IndexPage = (props: any) => {
  const recipes: Array<any> = props.data.allMarkdownRemark.edges

  return (
    <IndexLayout>
      <Wrapper>
        <Container>
          <RecipeList recipes={recipes} />
          <PostIt
            background={PostItBkgColor.rosino}
            content={
              <>
                <img style={{ width: '100%' }} src="https://www.instagram.com/p/BxXZCaXFVfX/media" />
                <Dida style={{ marginTop: 5 }}>since 1992</Dida>
              </>
            }
          />
          <PostIt
            style={{ gridColumnStart: 3, gridColumnEnd: 'five' }}
            background={PostItBkgColor.verdino}
            content={
              <>
                <Dida style={{ marginTop: 5 }}>Antipasto</Dida>
                <Dida style={{ marginTop: 5 }}>Primo</Dida>
                <Dida style={{ marginTop: 5 }}>Secondo</Dida>
                <Dida style={{ marginTop: 5 }}>Dolce</Dida>
                <Dida style={{ marginTop: 5 }}>Piatto unico</Dida>
              </>
            }
          />
        </Container>
      </Wrapper>
    </IndexLayout>
  )
}

export default IndexPage

export const listRecipeQuery = graphql`
  query ListRecipeQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          excerpt(format: HTML)
          frontmatter {
            title
          }
        }
      }
    }
  }
`
