import * as React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { FrontmatterRecipe } from '../type/FrontmatterRecipe'

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
    frontmatter: FrontmatterRecipe
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
`
