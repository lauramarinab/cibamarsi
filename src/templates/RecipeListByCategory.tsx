import React from 'react'
import { graphql } from 'gatsby'
import RecipeList from '../components/RecipeList'
import { EdgeNodeRecipe } from '../type/EdgeNodeRecipe'

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      totalCount: number
      group: Array<{ fieldValue: string }>
      edges: Array<EdgeNodeRecipe>
    }
  }
}

type Props = IndexPageProps & {
  pageContext: {
    category: string
  }
}

const RecipeListByCategory: React.FC<Props> = ({ data, pageContext }) => {
  const recipesByCategory = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.category === pageContext.category)

  return (
    <>
      <div>All post categorized as "{pageContext.category}"</div>
      <RecipeList recipes={recipesByCategory} />
    </>
  )
}

export default RecipeListByCategory

export const listQuery = graphql`
  query ListQueryByCat {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            description
            title
            category
            difficulty
            tags
          }
          excerpt(format: HTML)
        }
      }
    }
  }
`
