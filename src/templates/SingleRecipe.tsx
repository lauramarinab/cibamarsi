import * as React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

interface PageTemplateProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      description: string
      category: string
      difficulty: string
      tags: string
    }
  }
}

const Recipe: React.FC<{ data: PageTemplateProps }> = ({ data }) => {
  const recipe = data.markdownRemark
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />
      <h1>{recipe.frontmatter.title}</h1>
      <p>{recipe.frontmatter.difficulty}</p>

      <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: recipe.html }} />
    </div>
  )
}

export default Recipe

export const recipeQuery = graphql`
  query RecipeQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
        category
        difficulty
        tags
      }
    }
  }
`
