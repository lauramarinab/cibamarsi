import * as React from 'react'
import { graphql } from 'gatsby'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const Recipe: React.FC<PageTemplateProps> = ({ data }) => {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <span>title</span>
    </div>
  )
}

export default Recipe

export const recipeQuery = graphql`
  query RecipeQuery($slug: String!) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
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
